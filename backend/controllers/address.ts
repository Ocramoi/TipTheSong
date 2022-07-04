import express, { Request, Response } from 'express';
import { logger } from '../logger';

const UserModel = require('../models/user');
const AddressModel = require('../models/address');

module.exports.createAddress = async(req: Request, res: Response) => { 
    const body = req.body;
   
    try {
        const user = await UserModel.findById(body.userId); 
        
        if (!user) {
            return res.status(404).send("Error");
        }

        // Creates a new address
        const address = new AddressModel(body);
        const addressCreated = await address.save();
        
        // Adds it to the user addresss
        user.addresses.push(addressCreated._id);
        await user.save();
        
        return res.status(200).send(addressCreated);
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
        
        if (!address) {
            return res.status(404).send("Error");
        }

        // Deletes address from addressSchema
        await AddressModel.deleteOne({_id: id});

        // Deletes address from UserSchema
        const owner = await UserModel.findById(address.userId);
        let index = owner.addresses.indexOf(id);
        if (index !== -1) {
            owner.addresses.splice(index, 1);
        }
        await owner.save();

        res.status(200).send("Endereço deletado com sucesso");
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Error: ${e}`);
    }
};