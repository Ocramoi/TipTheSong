import express, { Request, Response } from 'express';
import { logger } from '../logger';

const ProductModel = require('../models/product');

module.exports.getProductById = async (req: Request, res: Response) => {
    console.log("alou");
    const result = await ProductModel.findOneBy({ id: req.params.id });
    console.log(result);
    return res.status(200).send("Sucesso");
}; 

module.exports.getProducts = async (req: Request, res: Response) => {
    console.log("produtinhos");
    const result = await ProductModel.find({});
    console.log(result);
    return res.status(200).send("Sucesso");
}

module.exports.createProduct = async (req: Request, res: Response) => {
    const body = req.body;

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
        amountInStock: body.amountInStock
    });
    
    await product.save(product);

    console.log("produto criado");
    console.log(product.id);
    return res.status(200).send("Sucesso");
}

module.exports.updateProduct = async (req: Request, res: Response) => {
    console.log("produto atualizado");
    return res.status(200).send("Sucesso");
}

module.exports.deleteProduct = async (req: Request, res: Response) => {
    console.log("produto deletado");
    return res.status(200).send("Sucesso");
}