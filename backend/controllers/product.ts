import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { logger } from '../logger';
import ProductModel from '../models/product';


const collectionSize = 5,
collectionFilters: { [ name: string ]: mongoose.PipelineStage[] } = {
    "new": [
        { $sort: { createdAt: -1, }, },
    ],
    "random": [
        { $sample: { size: collectionSize, }, },
    ],
    "last": [
        { $match: { amountInStock: { $nin: [ 0, ], }, } },
        { $sort: { amountInStock: 1, }, },
    ],
};

const suggestions = async (id: mongoose.Types.ObjectId, genres: string[]) => {
    const found = await ProductModel
        .aggregate([
            {
                $match: {
                    _id: { $nin: [ id ] },
                    genres: { $in: genres },
                }
            }, {
                $set: {
                    matchedCount: {
                        $size: {
                            $setIntersection: [ "$genres", genres ]
                        }
                    }
                }
            },
            { $sort: { matchedCount: -1, } },
        ])
        .limit(3);
    return (found || []) as string[];
};

module.exports.getProductById = async (req: Request, res: Response) => {
    const id = req.params.id;
    
    try {
        ProductModel
            .findById(id)
            .then(async product => {
                if (!product)
                    return res.status(400).send("Produto não achado");
                let productObj = {
                    ...product.toObject(),
                    suggestions: await suggestions(
                        product._id,
                        product.genres
                    ),
                };
                return res.status(200).send(productObj);
            })
            .catch(err => {
                return res.status(400).send(err);
            });
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro ao encontrar o produto: ${e}`);
    }
};

module.exports.getProducts = async (_req: Request, res: Response) => {
    try {
        const products = await ProductModel.find({});
        return res.status(200).send(products);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro ao encontrar os produtos: ${e}`);
    }
};

module.exports.getCollection = async (req: Request, res: Response) => {
    try {
        const collectionName = req.params.name as string;
        if (!collectionFilters[collectionName])
            return res.status(400).send(`Coleção inválida`);
        else {
            const products = await ProductModel
                .aggregate(collectionFilters[collectionName])
                .limit(collectionSize);
            return res.status(200).send(products);
        }
    } catch (e) {
        return res.status(500).send(`Erro ao carregar coleção`);
    }
};
