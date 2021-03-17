import * as express from 'express';
import * as userService from '../services/user.service';
import { HTTP_CODES } from '../utils';

export const getUserById = async (req: express.Request, res: express.Response): Promise<void> => {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) {
        res.status(HTTP_CODES.INVALID_REQUEST).send('Unable to find user');
    }
    res.send(user);
}

