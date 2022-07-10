import express, { Router, Request, Response } from 'express';

const{ verifyTokenAndAuth } = require('./verifyToken');

const addressController = require('../controllers/address'); 

const router: Router = express.Router();
router.post('/', verifyTokenAndAuth, addressController.createAddress);
router.get('/:id', verifyTokenAndAuth, addressController.getAddress);
router.put('/:id', verifyTokenAndAuth, addressController.updateAddress);
router.delete('/:id', verifyTokenAndAuth, addressController.deleteAddress);

export default router;
