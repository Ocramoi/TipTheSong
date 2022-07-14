import express, { Router } from 'express';

// ROUTES
import productRouter from './product';
import userRouter from './user';
import cardRouter from './card';
import addressRouter from './adddres';
import orderRouter from './order';
import adminRouter from './admin';



const router: Router = express.Router();
router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/card', cardRouter);
router.use('/address', addressRouter);
router.use('/order', orderRouter);
router.use('/admin', adminRouter);

export default router;
