import { Router } from 'express';
import CarController from './controllers/CarController';

const router = Router()

router.get('/cars', CarController.index)
router.get('/car/:id', CarController.findById)
router.post('/car', CarController.create)



export default router