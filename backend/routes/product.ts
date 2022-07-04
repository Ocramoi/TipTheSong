import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();
const productController = require('../controllers/product');

router.post('/', productController.createProduct);
router.get('/:id', productController.getProductById);
router.get('/', productController.getProducts);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;
