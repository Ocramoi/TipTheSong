import express, { Router, Request, Response } from 'express';

const{ verifyTokenAndAuth } = require('./verifyToken');
const userController = require('../controllers/user'); 
const router: Router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/:id', verifyTokenAndAuth, userController.getUserInfo);
router.put('/:id', verifyTokenAndAuth, userController.updateUserInfo);
router.get('/addresses/:id', verifyTokenAndAuth, userController.getUserAddresses);
router.get('/cards/:id', verifyTokenAndAuth, userController.getUserCards);
router.get('/orders/:id', verifyTokenAndAuth, userController.getUserOrders);

export default router;
