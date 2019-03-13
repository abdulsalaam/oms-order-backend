import * as bcrypt from 'bcrypt';
import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import * as jwt from 'jwt-then';
import config from '../../config/config';
import Order from './order.model';

export default class OrderController {
  public findAll = async (req: Request, res: Response): Promise<any> => {
    try {
      const orders = await Order.find();
      if (!orders) {
        return res.status(404).send({
          success: false,
          message: 'Orders not found',
          data: null
        });
      }

      res.status(200).send({
        success: true,
        data: orders
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

   public create = async (req: Request, res: Response): Promise<any> => {
    console.log('register request data:', req.body);
    const { productId, description, amount, status } = req.body;
    const tax = (15/100) * amount;
    const total = Number(amount) + Number(tax);
    try {

      const order = new Order({
        productId,
        description,
        amount,
        tax,
        total
      });

      const newOrder = await order.save();

      res.status(201).send({
        success: false,
        message: 'Order Successfully created',
        data: newOrder
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString()
      });
    }
  };

  public findOne = async (req: Request, res: Response): Promise<any> => {
    try {
       console.log('paramss:',req.params);
      const order = await Order.findById(req.params.id, { password: 0 });
      if (!order) {
        return res.status(404).send({
          success: false,
          message: 'Order not found',
          data: null
        });
      }

      res.status(200).send({
        success: true,
        data: order
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public updatePaymentStatus = async (req: Request, res: Response): Promise<any> => {
    console.log('request payment update:', req.body);
    const status = req.body.status;
    const paymentStatus = (status =='confirmed') ? 'done' : 'failed';
    const state = status;
    var objectId = mongoose.Types.ObjectId(req.params.id);
    
    
    try {
      const orderUpdated = await Order.findOneAndUpdate(
        {_id: objectId},
        {$set:{status : status , state : status, paymentStatus: paymentStatus}},{new:true});
        
      if (!orderUpdated) {
          
        return res.status(404).send({
          success: false,
          message: 'Order not found',
          data: null
        });
      }
      res.status(200).send({
        success: true,
        data: orderUpdated
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };


  public update = async (req: Request, res: Response): Promise<any> => {
    const { productId, description, amount } = req.body;
    let tax = (15/100) * amount;
    let total = Number(amount) + Number(tax);
    try {
      const orderUpdated = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            productId,
            description,
            amount,
            tax,
            total
          }
        },
        { new: true }
      );
      if (!orderUpdated) {
        return res.status(404).send({
          success: false,
          message: 'Order not found',
          data: null
        });
      }
      res.status(200).send({
        success: true,
        data: orderUpdated
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };


  public remove = async (req: Request, res: Response): Promise<any> => {
    try {
      const order = await Order.findByIdAndRemove(req.params.id);

      if (!order) {
        return res.status(404).send({
          success: false,
          message: 'Order not found',
          data: null
        });
      }
      res.status(204).send();
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
}
