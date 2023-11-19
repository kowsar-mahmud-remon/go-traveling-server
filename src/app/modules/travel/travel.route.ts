import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { TravelController } from './travel.controller';
import { TravelValidation } from './travel.validation';
const router = express.Router();

router.get('/:id', TravelController.getSingleTravel);

router.get('/', TravelController.getAllTravels);

router.post(
  '/create-travel',
  validateRequest(TravelValidation.createTravelZodSchema),
  TravelController.createTravel
);

router.delete('/:id', TravelController.deleteTravel);

router.patch('/:id', TravelController.updateTravel);

export const TravelRoutes = router;
