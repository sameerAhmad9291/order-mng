import * as express from 'express';
import * as orderController from '../controllers/user.controller';

const router = express.Router();

router.get('/get-all', orderController.getOrders);
router.get('/get-by-id/:id', orderController.getOrderById);
router.put('/update/:id', orderController.updateOrder);

export default router;