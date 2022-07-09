import express, { Request, Response } from 'express';
import { userInfo } from 'os';
import { send } from 'process';
import { logger } from '../logger';

const ProductModel = require('../models/product');

module.exports.getProductById = async (req: Request, res: Response) => {
    const id = req.params.id;
    
    try {
        const product = await ProductModel.findById(id);
        if (product)
            return res.status(200).send(product);
        else
            return res.status(400).send("Produto não encontrado");
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
