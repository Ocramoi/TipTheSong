import express, { Router } from 'express';
import dotenv from 'dotenv';

// ROUTES
import productRouter from './product';
const router: Router = express.Router();

router.use('/product', productRouter);

export default router;
