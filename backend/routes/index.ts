import express, { Router } from 'express';
import dotenv from 'dotenv';

// ROUTES
import productRouter from './product';
import userRouter from './user';
import cardRouter from './card';


const router: Router = express.Router();
router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/card', cardRouter)


export default router;
