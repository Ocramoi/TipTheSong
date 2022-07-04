import express, { Router } from 'express';

const order = require('../controllers/order'); 

const router: Router = express.Router();
router.post('/', order.finishOrder);
router.get('/:id', order.getOrder);

export default router;

