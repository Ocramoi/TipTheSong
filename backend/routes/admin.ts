import express, { Router } from 'express';

const router: Router = express.Router();
const adminController = require('../controllers/admin');

router.get('/products', adminController.getProducts);
router.get('/users', adminController.getUsers);
router.get('/admins', adminController.getAdmins);
router.post('/product/', adminController.createProduct);
router.put('/product/:id', adminController.updateProduct);
router.delete('/product/:id', adminController.deleteProduct);
router.put('/promote/:id', adminController.promoteUser);
router.put('/demote/:id', adminController.demoteUser);
router.delete('/user/:id', adminController.deleteUser);

export default router;