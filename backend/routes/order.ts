import express, { Router } from 'express';

const{ verifyTokenAndAuth } = require('./verifyToken');
const order = require('../controllers/order'); 

const router: Router = express.Router();
router.post('/', verifyTokenAndAuth, order.finishOrder);
router.get('/:id',  verifyTokenAndAuth, order.getOrder);

export default router;

