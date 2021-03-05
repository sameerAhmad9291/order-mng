import * as express from 'express';
import * as orderService from '../services/user.service';

export const getOrders = async (req: express.Request, res: express.Response): Promise<void> => {
    const orders = await orderService.getOrders();
    res.send(orders);
}


export const getOrderById = async (req: express.Request, res: express.Response): Promise<void> => {
    const { id } = req.params;
    const orders = await orderService.getOrderById(id);
    res.send(orders);
}


export const updateOrder = async (req: express.Request, res: express.Response): Promise<void> => {
    const { id } = req.params;
    const { title, bookingDate } = req.body;
    const orders = await orderService.updateOrder(id, title, bookingDate);
    res.send(orders);
}
