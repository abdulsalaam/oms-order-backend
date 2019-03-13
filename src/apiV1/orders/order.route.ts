import { Router } from 'express';
import verifyToken from '../../helpers/verifyToken';
import Controller from './order.controller';

const order: Router = Router();
const controller = new Controller();

// Retrieve all Orders
order.get('/', controller.findAll);

// Retrieve a Specific Order
order.get('/:id', verifyToken, controller.findOne);

// Update a Order with Id
order.put('/:id', controller.update);

// Update a payment Order status by order Id
order.put('/payment/:id', controller.updatePaymentStatus);

// Create a Order
order.post('/', controller.create);

// Delete a Order with Id
order.delete('/:id', controller.remove);

export default order;
