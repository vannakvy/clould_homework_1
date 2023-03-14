import { Router } from 'express';
import { requireUser, deserializeUser } from '../../middlewares';
import * as UserController from './users.controllers';

const router = Router();
router.get('/', UserController.me);
router.get('/me', deserializeUser, requireUser, UserController.me);

export default router;