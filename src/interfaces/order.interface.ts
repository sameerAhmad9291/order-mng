import { IAddress } from "./address.interface";
import { ICustomer } from "./customer.interface";

export interface IOrder {
    id: string;
    title: string;
    bookingDate: Date;
    address: IAddress;
    customer: ICustomer;
}