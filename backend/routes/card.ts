import express, { Router, Request, Response } from 'express';

const card = require('../controllers/card'); 

const router: Router = express.Router();
router.post('/', card.createCard);
router.get('/:id', card.getCard);
router.delete('/:id', card.deleteCard);

export default router;
