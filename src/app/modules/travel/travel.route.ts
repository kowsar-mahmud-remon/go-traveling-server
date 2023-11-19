import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { TravelController } from './travel.controller';
import { TravelValidation } from './travel.validation';
const router = express.Router();

router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  TravelController.getSingleTravel
);

router.get(
  '/',
  // auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  TravelController.getAllTravels
);

router.post(
  '/create-travel',
  validateRequest(TravelValidation.createTravelZodSchema),
  // auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  TravelController.createTravel
);

router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  TravelController.deleteTravel
);

router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  TravelController.updateTravel
);

export const TravelRoutes = router;
