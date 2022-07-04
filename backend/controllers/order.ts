import express, { Request, Response } from 'express';
import { logger } from '../logger';

const UserModel = require('../models/user');
const OrderModel = require('../models/order');

module.exports.finishOrder = async(req: Request, res: Response) => { 
    const body = req.body;
   
    try {
        const user = await UserModel.findById(body.userId); 
        
        if (!user) {
            return res.status(404).send("Error");
        }

        // Creates a new order
        const order = new OrderModel({
            date: new Date(),
            status: 'Concluído',
            total: body.total,
            userId: body.userId,
        });
        const orderCreated = await order.save();
        
        // Adds it to the user orders
        user.orders.push(orderCreated._id);
        await user.save();
        
        return res.status(200).send(orderCreated);
    } catch (e) { // If the is any errors with the data
        logger.error(e);
        return res.status(500).send(`Erro ao cadastrar cartão: ${e}`);
    }
};

module.exports.getOrder = async(req: Request, res: Response) => { 
    const id = req.params.id;
    
    try {
        const order = await OrderModel.findById(id);       
        return res.status(200).send(order);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Error: ${e}`);
    }
};

// {   
//     "total": 10,   
//     "userId": "62c260d986ff2aa1e750af9d"
// 62c27c1b7625ac89f68a23e5
// }