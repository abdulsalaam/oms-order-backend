import { Router } from 'express';
import auth from './auth/auth.route';
import users from './users/user.route';
import orders from './orders/order.route';

const router: Router = Router();

router.use('/', auth);
router.use('/users', users);
router.use('/orders', orders);

export default router;
