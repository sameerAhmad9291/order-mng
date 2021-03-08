import * as orderModel from '../models/order.model';
import { IOrder } from '../interfaces/order.interface';

export const getOrders = async (): Promise<IOrder[]> => {
    const orders = await orderModel.getOrders();
    return orders;
}

export const getOrderById = async (id): Promise<IOrder> => {
    const orders = await orderModel.getOrderById(id);
    return orders;
}

export const updateOrder = async (id, title, bookingDate): Promise<IOrder> => {
    const orders = await orderModel.updateOrder(id, title, bookingDate);
    return orders;
}