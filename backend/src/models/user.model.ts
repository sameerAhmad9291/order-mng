import admin from 'firebase-admin';
import { IUser } from '../interfaces/user.interface';
const db = admin.firestore();
const user = db.collection('users');

const getDocById = async (userId) => {
    return (await user.where('uid', '==', userId).get()).docs[0];
}

export const getUserById = async (userId): Promise<IUser> => {
    const user = (await getDocById(userId))?.data() as IUser;
    return user
}