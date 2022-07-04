import express, { Router, Request, Response } from 'express';
const userController = require('../controllers/user'); 

const router: Router = express.Router();
router.post('/', userController.createUser);
router.get('/:id', userController.getUserInfo);

export default router;
