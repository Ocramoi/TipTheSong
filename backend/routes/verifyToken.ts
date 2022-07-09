import express, { Request, Response, NextFunction } from 'express';
import jwt, {Secret} from 'jsonwebtoken';
import dotenv from 'dotenv';
import { verify } from 'crypto';

dotenv.config();
const SECRET: Secret = process.env.SECRET ?? '';

module.exports.verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = (req.headers['Authorization'] as string)?.split(' ')[1];
    if (!token) {
        return res.status(401).send("Usuário não autenticado");
    }

    jwt.verify(token, SECRET, (err, user) => {
        if (err) return res.status(401).send("Token inválido");
        req.body.user = user;
        next();
    });
}  

module.exports.verifyTokenAndAuth = (req: Request, res: Response, next: NextFunction) => {
    module.exports.verifyToken(req, res, () => {
        if (req.body.user.id == req.params.id || req.body.user.isAdmin) return next();
        return res.status(403).send("Usuário autorizado");
    });
}  

module.exports.verifyTokenAndAdmin = (req: Request, res: Response, next: NextFunction) => {
    module.exports.verifyToken(req, res, () => {
        if (req.body.user.isAdmin) return next();
        return res.status(403).send("Usuário autorizado");
    });
}  
