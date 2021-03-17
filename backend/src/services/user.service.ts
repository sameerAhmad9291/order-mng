import * as userModel from '../models/user.model';
import { IUser } from '../interfaces/user.interface';

export const getUserById = async (id): Promise<IUser> => {
    const user = await userModel.getUserById(id);
    return user;
}