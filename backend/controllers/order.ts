import { Request, Response } from 'express';
import { logger } from '../logger';

import UserModel from '../models/user';
import OrderModel from '../models/order';
import CardModel from '../models/card';
import AddressModel from '../models/address';

module.exports.finishOrder = async(req: Request, res: Response) => { 
    const body = req.body;
   
    try {
        const user = await UserModel.findById(body.userId),
        address = await AddressModel.findById(body.addressId);
        
        if (!user || !address || !body.method)
            return res.status(400).send("Erro: Informações não encontradas");
        else if (body.method == "card" || !body.cardId)
            return res.status(400).send("Erro: Método inválido");

        let orderInfo: any = {
            date: new Date(),
            status: 'Concluído',
            total: body.total,
            userId: user._id,
            addressId: address._id,
            method: body.method,
        };

        if (orderInfo.method == "card") {
            const card = await CardModel.findById(body.cardId);
            if (!card) return res.status(400).send("Erro: Cartão não encontrado");
            orderInfo = {
                ...orderInfo,
                cardId: card._id,
            };
        }

        // Creates a new order
        const order = await OrderModel.create(orderInfo);
        // const orderCreated = await order.save();
        
        // Adds it to the user orders
        // @ts-ignore
        user.orders = [ ...user.orders, order._id, ];
        await user.save();
        
        return res.status(200).send(order);
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
