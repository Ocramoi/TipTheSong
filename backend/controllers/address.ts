import { Request, Response } from 'express';
import mongoose from 'mongoose';

import { logger } from '../logger';
import UserModel from '../models/user';
import AddressModel from '../models/address';

module.exports.createAddress = async(req: Request, res: Response) => { 
    const body = req.body;
   
    try {
        const user = await UserModel.findById(body.userId); 
        if (!user) return res.status(404).send("Error");

        // Creates a new address TODO CHECK should create inside user
        // const address = new AddressModel(body);
        // const addressCreated = await address.save();
        // if (!addressCreated) return res.status(500).send("Erro ao criar endereço");
        
        // Adds it to the user addresss
        user.addresses.push(body);
        user.save()
            .then(userUpdated => {
                return res.status(200).send(userUpdated);
            })
            .catch(err => {
                logger.error(err);
                return res.status(500).send(err);
            });

    } catch (e) { // If the is any errors with the data
        logger.error(e);
        return res.status(500).send(`Error: ${e}`);
    }
};

module.exports.getAddress = async(req: Request, res: Response) => { 
    const id = req.params.id;
    
    try {
        const address = await AddressModel.findById(id);       
        return res.status(200).send(address);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Error: ${e}`);
    }
};

module.exports.updateAddress = async(req: Request, res: Response) => { 
    const body = req.body;
    const id = req.params.id;

    try {
        const address = await AddressModel.findByIdAndUpdate(id, body);        
        return res.status(200).send(address);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro encontrar usuário: ${e}`);
    }
};

module.exports.deleteAddress = async(req: Request, res: Response) => { 
    const id = req.params.id;
    
    try {
        const address = await AddressModel.findById(id);
        if (!address) return res.status(400).send("Error");

        // Deletes address from addressSchema
        await AddressModel.deleteOne({ _id: id });

        // Deletes address from UserSchema
        UserModel.findOneAndUpdate(
            { _id: address.userId },
            {
                $pull: {
                    addresses: {
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
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Error: ${e}`);
    }
};
