import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();
const productController = require('../controllers/product'); 

router.get('/:id', productController.getProductById);

export default router;
