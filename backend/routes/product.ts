import express, { Router } from 'express';

const router: Router = express.Router();
const productController = require('../controllers/product');

router.get('/:id', productController.getProductById);
router.get('/', productController.getProducts);

export default router;
