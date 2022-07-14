import { Request, Response } from 'express';
import { logger } from '../logger';

import mongoose from 'mongoose';
import UserModel from '../models/user';
import OrderModel from '../models/order';
import CardModel from '../models/card';
import AddressModel from '../models/address';
import ProductModel from '../models/product';

interface OrderInfo_t {
    date: Date,
    status: String,
    userId: mongoose.Types.ObjectId,
    addressId: mongoose.Types.ObjectId,
    method: String,
    products: String[] | mongoose.Types.ObjectId[],
    quantities: Number[],
    cardId?: mongoose.Types.ObjectId,
};

module.exports.finishOrder = async(req: Request, res: Response) => { 
    const body = req.body;
   
    try {
        const user = await UserModel.findById(body.user.id),
        address = await AddressModel.findById(body.addressId);
        
        if (!user || !address || !body.method)
            return res.status(400).send("Erro: Informações não encontradas");
        else if (body.method == "card" && !body.cardId)
            return res.status(400).send("Erro: Método inválido");

        let orderInfo: OrderInfo_t;
        try {
            orderInfo = {
                date: new Date(),
                status: 'Concluído',
                userId: user._id,
                addressId: address._id,
                method: body.method,
                products: Object.keys(body.cart),
                quantities: Object.values(body.cart),
            } as OrderInfo_t;
        } catch (e: any) {
            logger.error(e);
            return res.status(400).send("Erro: Informações incorretas");
        }

        if (!orderInfo.products.length)
            return res.status(400).send("Erro: Lista de produtos não podem ser vazia");

        if (orderInfo.method == "card") {
            const card = await CardModel.findById(body.cardId);
            if (!card) return res.status(400).send("Erro: Cartão não encontrado");
            orderInfo.cardId = card._id;
        }

        let outOfStock = [] as string[];
        const productObjs = (await ProductModel.find(
            { '_id': { $in: orderInfo.products } },
        ));
        if (!productObjs || productObjs.length !== orderInfo.products.length)
            return res.status(400).send("Erro: Um ou mais produtos inválidos");
        for (let i = 0; i < productObjs.length; ++i) {
            if (orderInfo.quantities[i] > (productObjs[i].amountInStock || -1))
                outOfStock.push((productObjs[i].title || "Título"));
            else
                // @ts-ignore
                productObjs[i].amountInStock -= orderInfo.quantities[i];
        }
        if (outOfStock.length)
            return res.status(405).json({
                message: "Álbuns fora de estoque:",
                outOfStock: outOfStock,
            });
        orderInfo.products = productObjs.map(product => product._id);
        for (const product of productObjs)
            await product.save();

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
        return res.status(500).send(`Erro ao registrar compra: ${e}`);
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
