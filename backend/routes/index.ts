import express, { Router } from 'express';
import dotenv from 'dotenv';

// ROUTES
import productRouter from './product';
import userRouter from './user';

const router: Router = express.Router();
router.use('/product', productRouter);
router.use('/user', userRouter);


export default router;
