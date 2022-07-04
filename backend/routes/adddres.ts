import express, { Router, Request, Response } from 'express';

const addressController = require('../controllers/address'); 

const router: Router = express.Router();
router.post('/', addressController.createAddress);
router.get('/:id', addressController.getAddress);
router.put('/:id', addressController.updateAddress);
router.delete('/:id', addressController.deleteAddress);

export default router;
