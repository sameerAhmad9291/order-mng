import admin from 'firebase-admin';
import { IOrder } from '../interfaces/order.interface';
const db = admin.firestore();
const order = db.collection('orders');
const batch = db.batch();

export const getOrders = async () => {
    const orders = (await order.get()).docs.map(doc => doc.data()) as IOrder[];
    return orders;
}

const getDocById = async (orderId) => {
    return (await order.where('uid', '==', orderId).get()).docs[0];
}

export const getOrderById = async (orderId): Promise<IOrder> => {
    const order = (await getDocById(orderId))?.data() as IOrder;
    return order
}

export const updateOrder = async (orderId: string, title: string, bookingDate: Date) => {
    await (await getDocById(orderId))?.ref.update({
        title,
        bookingDate,
    });
    return getOrderById(orderId);
}