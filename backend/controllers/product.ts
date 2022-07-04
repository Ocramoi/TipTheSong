import express, { Request, Response } from 'express';
import { userInfo } from 'os';
import { send } from 'process';
import { logger } from '../logger';

const ProductModel = require('../models/product');

module.exports.getProductById = async (req: Request, res: Response) => {
    const id = req.params.id;
    
    try {
        const product = await ProductModel.findById(id);
        return res.status(200).send(product);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro ao encontrar o produto: ${e}`);
    }
};

module.exports.getProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductModel.find({});
        return res.status(200).send(products);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro ao encontrar os produtos: ${e}`);
    }
};

module.exports.createProduct = async (req: Request, res: Response) => {
    const body = req.body;
    
    try {
        const product = new ProductModel({
            title: body.title,
            launchDate: body.launchDate,
            frontCover: body.frontCover,
            artists: body.artists,
            genres: body.genres,
            shortDescription: body.shortDescription,
            longDescription: body.longDescription,
            extraInfo: body.extraInfo,
            price: body.price,
            amountInStock: body.amountInStock,
            amountSold: body.amountSold
        });
        
        const createdProduct = await product.save(product);
        return res.status(200).send(createdProduct);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro ao cadastrar usuário: ${e}`);
    }
};

module.exports.updateProduct = async (req: Request, res: Response) => {
    const body = req.body;
    const id = req.params.id;
    
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, body);
        return res.status(200).send(updatedProduct);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro ao atualizar produto: ${e}`);
    }
};

module.exports.deleteProduct = async (req: Request, res: Response) => {
    const id = req.params.id;
    
    try {
        const product = await ProductModel.findById(id);

        if (!product)
            return res.status(404).send("Produto não encontrado");

        // Delect product from productsSchema
        await ProductModel.deleteOne({ _id: id});

        return res.status(200).send("Produto removido com sucesso");
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro ao remover produto: ${e}`);
    }
};