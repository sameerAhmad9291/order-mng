import * as express from 'express';
import * as orderService from '../services/order.service';
import { HTTP_CODES } from '../utils';

export const getOrders = async (req: express.Request, res: express.Response): Promise<void> => {
    const orders = await orderService.getOrders();
    res.send(orders);
}


export const getOrderById = async (req: express.Request, res: express.Response): Promise<void> => {
    const { id } = req.params;
    const order = await orderService.getOrderById(id);
    if (!order) {
        res.status(HTTP_CODES.INVALID_REQUEST).send('Unable to find order');
    }
    res.send(order);
}


export const updateOrder = async (req: express.Request, res: express.Response): Promise<void> => {
    const { id } = req.params;
    const { title, bookingDate } = req.body;
    const orders = await orderService.updateOrder(id, title, bookingDate);
    res.send(orders);
}
