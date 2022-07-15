import { Request, Response } from 'express';
import { logger } from '../logger';

import UserModel from '../models/user';
import ProductModel from '../models/product';
import AddressModel from '../models/address';
import OrderModel from '../models/order';
import CardModel from '../models/card';


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
            amountSold: 0
        });
        
        const createdProduct = await product.save();
        return res.status(200).send(createdProduct);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro ao criar produto: ${e}`);
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

module.exports.promoteUser = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const user = await UserModel.findByIdAndUpdate(id, {isAdmin: true});       
        return res.status(200).send(user);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro ao promover usuário: ${e}`);
    }

};

module.exports.demoteUser = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const user = await UserModel.findByIdAndUpdate(id, {isAdmin: false});       
        return res.status(200).send(user);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro ao promover usuário: ${e}`);
    }

};

module.exports.deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    
    try {
        const user = await UserModel.findById(id);

        if (!user)
            return res.status(404).send("Usuário não encontrado");

        // Delect user from usersSchema and related infos
        await UserModel.deleteOne({ _id: id});
        await AddressModel.deleteMany({ userId: id });
        await CardModel.deleteMany({ userId: id });
        await OrderModel.deleteMany({ userId: id });

        return res.status(200).send("Usuario removido com sucesso");
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro ao remover usuário: ${e}`);
    }
};

module.exports.getProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductModel.find({});       
        return res.status(200).send(products);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro carregar produtos: ${e}`);
    }

};

module.exports.getUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find({isAdmin: false}).exec();       
        return res.status(200).send(users);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro carregar usuários: ${e}`);
    }

};

module.exports.getAdmins = async (req: Request, res: Response) => {
    try {
        const admins = await UserModel.find({isAdmin: true}).exec();       
        return res.status(200).send(admins);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro carregar administradores: ${e}`);
    }
};