import express from 'express';
import { UserController } from './user.controller';
const router = express.Router();

router.get('/:id', UserController.getSingleUser);

router.get('/', UserController.getAllUsers);

router.post('/create-user', UserController.createUser);

router.delete('/:id', UserController.deleteUser);

router.patch('/:id', UserController.updateUser);

export const UserRoutes = router;
