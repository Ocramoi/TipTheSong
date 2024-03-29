import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET: Secret = process.env.SECRET ?? '';

module.exports.verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = (req.headers['authorization'] as string)?.split(' ')[1];
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
        return next();
        // if (req.body.user.id == req.params.id || req.body.user.isAdmin || req.body.user.id == req.body.userId )
        //     return next();
        // return res.status(403).send("Usuário não autorizado");
    });
}  

module.exports.verifyTokenAndAdmin = (req: Request, res: Response, next: NextFunction) => {
    module.exports.verifyToken(req, res, () => {
        if (req.body.user.isAdmin) return next();
        return res.status(403).send("Usuário não autorizado");
    });
}  
