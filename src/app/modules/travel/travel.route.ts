import express from 'express';
import { TravelController } from './travel.controller';
const router = express.Router();

router.get(
  '/:id',

  TravelController.getSingleTravel
);

router.get(
  '/',

  TravelController.getAllTravels
);

router.post(
  '/create-travel',

  TravelController.createTravel
);

router.delete('/:id', TravelController.deleteTravel);

router.patch('/:id', TravelController.updateTravel);

export const TravelRoutes = router;
