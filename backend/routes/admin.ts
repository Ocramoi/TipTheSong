import express, { Router } from 'express';

const router: Router = express.Router();
const{ verifyTokenAndAdmin } = require('./verifyToken');
const adminController = require('../controllers/admin');

router.get('/products', verifyTokenAndAdmin, adminController.getProducts);
router.get('/users', verifyTokenAndAdmin, adminController.getUsers);
router.get('/admins', verifyTokenAndAdmin, adminController.getAdmins);
router.post('/product/', verifyTokenAndAdmin, adminController.createProduct);
router.put('/product/:id', verifyTokenAndAdmin, adminController.updateProduct);
router.delete('/product/:id', verifyTokenAndAdmin, adminController.deleteProduct);
router.put('/promote/:id', verifyTokenAndAdmin, adminController.promoteUser);
router.put('/demote/:id', verifyTokenAndAdmin, adminController.demoteUser);
router.delete('/user/:id', verifyTokenAndAdmin, adminController.deleteUser);

export default router;