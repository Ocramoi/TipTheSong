import express, { Router, Request, Response } from 'express';

const{ verifyTokenAndAuth } = require('./verifyToken');
const card = require('../controllers/card'); 

const router: Router = express.Router();
router.post('/', verifyTokenAndAuth, card.createCard);
router.get('/:id', verifyTokenAndAuth, card.getCard);
router.delete('/:id', verifyTokenAndAuth, card.deleteCard);

export default router;
