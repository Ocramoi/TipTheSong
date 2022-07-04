import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { logger } from '../logger';

const UserModel = require('../models/user');

module.exports.createUser = async (req: Request, res: Response) => {
    const body = req.body;

    try {
        // Check if the user exists already
        const existingUser = await UserModel.findOne({
            email: body.email
        });
    
        if (existingUser) {
            await UserModel.deleteOne({_id: existingUser._id});
            return res.status(409).send({'error': 'Email já cadastrado.'});
        }

        // Tries to create the user
        const user = new UserModel({
            name: body.name,
            phone: body.phone,
            email: body.email,   
            password: await bcrypt.hash(body.password, 10),  
            isAdmin: false,
            addresses: [],
            cards: [],
            orders: []
        });

        const userCreated = await user.save(user);
        return res.status(200).send(userCreated);
    } catch (e) { // If the is any errors with the data
        logger.error(e);
        return res.status(500).send(`Erro ao cadastrar usuário: ${e}`);
    }
};

module.exports.getUserInfo = async(req: Request, res: Response) => { 
    try {
        const user = await UserModel.findById(req.params.id);       
        return res.status(200).send(user);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro encontrar usuário: ${e}`);
    }
};

module.exports.updateUserInfo = async(req: Request, res: Response) => { 
    const {name, phone, email, currPassword, newPassword} = req.body;
    const id = req.params.id;
    try {
        const user = await UserModel.findById(req.params.id);       
        const isValid =  await bcrypt.compare(currPassword, user.password);

        if (!isValid) {
            return res.status(400).send("Senha inválida");
        }
    
        const updatedUser = await user.update({
            name: name,
            phone: phone,
            email: email,
            password: await bcrypt.hash(newPassword, 10)});
        
        return res.status(200).send(updatedUser);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro encontrar usuário: ${e}`);
    }
};

module.exports.getUserCards = async(req: Request, res: Response) => { 
    try {
        const user = await UserModel.findById(req.params.id);       
        return res.status(200).send(user.cards);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro encontrar usuário: ${e}`);
    }
};

module.exports.getUserAddresses = async(req: Request, res: Response) => { 
    try {
        const user = await UserModel.findById(req.params.id);       
        return res.status(200).send(user.addresses);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro encontrar usuário: ${e}`);
    }
};

module.exports.getUserOrders = async(req: Request, res: Response) => { 
    try {
        const user = await UserModel.findById(req.params.id);       
        return res.status(200).send(user.orders);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro encontrar usuário: ${e}`);
    }
};
