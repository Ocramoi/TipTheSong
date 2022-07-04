import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { logger } from '../logger';

const UserModel = require('../models/user');
const CardModel = require('../models/card');

module.exports.createCard = async(req: Request, res: Response) => { 
    const body = req.body;
   
    try {
        const user = await UserModel.findById(body.userId); 
        
        if (!user) {
            return res.status(404).send("Error");
        }

        // Creates a new card
        const card = new CardModel(body);
        const cardCreated = await card.save();
        
        // Adds it to the user cards
        user.cards.push(cardCreated._id);
        await user.save();
        
        return res.status(200).send(cardCreated);
    } catch (e) { // If the is any errors with the data
        logger.error(e);
        return res.status(500).send(`Erro ao cadastrar cartão: ${e}`);
    }
};

module.exports.getCard = async(req: Request, res: Response) => { 
    const id = req.params.id;
    
    try {
        const card = await CardModel.findById(id);       
        return res.status(200).send(card);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Error: ${e}`);
    }
};

module.exports.deleteCard = async(req: Request, res: Response) => { 
    const id = req.params.id;
    
    try {
        const card = await CardModel.findById(id);
        
        if (!card) {
            return res.status(404).send("Error");
        }

        // Deletes card from CardSchema
        await CardModel.deleteOne({_id: id});

        // Deletes card from UserSchema
        const owner = await UserModel.findById(card.userId);
        let index = owner.cards.indexOf(id);
        if (index !== -1) {
            owner.cards.splice(index, 1);
        }
        await owner.save();

        res.status(200).send("Cartão deletado com sucesso");
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Error: ${e}`);
    }
};