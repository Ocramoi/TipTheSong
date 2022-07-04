import express, { Router, Request, Response } from 'express';
const userController = require('../controllers/user'); 

const router: Router = express.Router();
router.post('/', userController.createUser);
router.get('/:id', userController.getUserInfo);
router.put('/:id', userController.updateUserInfo);
router.get('/addresses/:id', userController.getUserAddresses);
router.get('/cards/:id', userController.getUserCards);
router.get('/orders/:id', userController.getUserOrders);

export default router;
