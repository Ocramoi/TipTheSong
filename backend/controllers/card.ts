import { Request, Response } from 'express';
import { logger } from '../logger';

import UserModel from '../models/user';
import CardModel from '../models/card';

module.exports.createCard = async(req: Request, res: Response) => { 
    const body = req.body;
   
    try {
        const user = await UserModel.findById(body.userId); 
        
        if (!user) return res.status(404).send("Error");

        // Creates a new card 
        const card = new CardModel(body);
        const cardCreated = await card.save();
        if (!cardCreated) return res.status(500).send("Erro ao criar cartão");
        
        // Adds it to the user addresss
        // @ts-ignore
        user.cards = [...user.cards, cardCreated._id];
        user.save()
            .then(userUpdated => {
                return res.status(200).send(userUpdated);
            })
            .catch(err => {
                return res.status(500).send(err);
            });

    } catch (e) { // If the is any errors with the data
        logger.error(e);
        return res.status(500).send(`Error: ${e}`);
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
        
        if (!card) return res.status(404).send("Error");

        // Deletes card from CardSchema
        await CardModel.deleteOne({_id: id});

        // Deletes card from UserSchema
        UserModel.findOneAndUpdate(
            { _id: card.userId },
            {
                $pull: {
                    cards: {
                        _id: id,
                    },
                },
            }
        )
            .exec()
            .then(updated => {
                return res.status(200).send(updated);
            })
            .catch(err => {
                return res.status(400).send(err);
            });

        // TODO remove leagcy v
        // const owner = await UserModel.findById(card.userId);
        // let index = owner.cards.indexOf(id);
        // if (index !== -1) {
        //     owner.cards.splice(index, 1);
        // }
        // await owner.save();

        // res.status(200).send("Cartão deletado com sucesso");
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Error: ${e}`);
    }
};
