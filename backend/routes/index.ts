import express, { Router } from 'express';
import dotenv from 'dotenv';

// ROUTES
import productRouter from './products';

const router: Router = express.Router();

router.use('/products', productRouter);

export default router;
