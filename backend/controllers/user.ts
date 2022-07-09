import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt, {Secret} from 'jsonwebtoken';
import { logger } from '../logger';
import dotenv from 'dotenv';

dotenv.config();
const SECRET: Secret = process.env.SECRET ?? '';

import UserModel from '../models/user';

module.exports.register = async (req: Request, res: Response) => {
    const {name, phone, email, password} = req.body;

    try {
        // Checks if the email has already been registered
        const existingUser = await UserModel.findOne({ email: email });
        if (existingUser) {
            return res.status(409).send({'error': 'Email já cadastrado.'});
        }

        // Tries to create the user
        const user = new UserModel({
            name: name,
            phone: phone,
            email: email,   
            password: await bcrypt.hash(password, 10),  
            isAdmin: false,
            addresses: [],
            cards: [],
            orders: []
        });

        // creates the access token for the new user
        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            }, 
            SECRET, 
            { expiresIn:"1d" }
        );

        // Saves the new user
        const userCreated = await user.save();
        if (userCreated) return res.status(200).send({user, accessToken});
        else throw new Error("Erro ao salvar");
    } catch (e) { // If the is any errors with the data
        logger.error(e);
        return res.status(500).send(`Erro ao cadastrar usuário: ${e}`);
    }
};

module.exports.login = async (req: Request, res: Response) => {
    const {email, password} = req.body;

    try {
        // Tries to find an user with matching email
        const user = await UserModel
            .findOne({ email: email })
            .populate("addresses")
            .populate("cards")
            .populate("orders");
        if (!user) {
            return res.status(400).send("Erro ao logar usuário: Email não cadastrado");
        }

        // Check if given password matches user.password
        const isValid =  await bcrypt.compare(password, user.password || "");
        if (!isValid) {
            return res.status(403).send("Erro ao logar usuário: Senha inválida");
        }

        // creates the access token for the logged user
        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            }, 
            SECRET, 
            { expiresIn:"1d" }
        );

        return res.status(200).send({ user, accessToken });
    } catch (e) { // If the is any errors with the data
        logger.error(e);
        return res.status(500).send(`Erro ao logar usuário: ${e}`);
    }
};

module.exports.getUserInfo = async(req: Request, res: Response) => { 
    try {
        const user = await UserModel
            .findById(req.params.id)
            .populate("addresses")
            .populate("cards")
            .populate("orders");
        return res.status(200).send(user);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro carregar usuário: ${e}`);
    }
};

module.exports.updateUserInfo = async(req: Request, res: Response) => { 
    const { name, phone, email, curPassword, newPassword } = req.body;
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id);
        if (!user) throw new Error("User não encontrado");
      
        if (!curPassword || !newPassword) {
            user.name = name && name.trim() !== "" ? name.trim() : user.name;
            user.phone = phone && phone.trim() !== "" ? phone.trim() : user.phone;
            user.email = email && email.trim() !== "" ? email.trim() : user.email;
        } else {
            const isValid =  await bcrypt.compare(curPassword, user.password || "");

            // Check if given password matches user.password
            if (!isValid) {
                return res.status(400).send("Erro ao atualizar usuário: Senha inválida");
            }

            user.password = await bcrypt.hash(newPassword, 10);
        }    

        const updatedUser = await user.save();
        return res.status(200).send(updatedUser);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro ao atualizar usuário: ${e}`);
    }
};

module.exports.getUserCards = async(req: Request, res: Response) => { 
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) throw new Error("User não encontrado");
        return res.status(200).send(user.cards);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro ao encontrar usuário: ${e}`);
    }
};

module.exports.getUserAddresses = async(req: Request, res: Response) => { 
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) throw new Error("User não encontrado");
        return res.status(200).send(user.addresses);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro ao encontrar usuário: ${e}`);
    }
};

module.exports.getUserOrders = async(req: Request, res: Response) => { 
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) throw new Error("User não encontrado");
        return res.status(200).send(user.orders);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Erro ao encontrar usuário: ${e}`);
    }
};
