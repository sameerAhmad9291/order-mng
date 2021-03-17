import * as express from 'express';
import * as orderController from '../controllers/order.controller';

const router = express.Router();

router.get('/', orderController.getOrders);
router.get('/:id', orderController.getOrderById);
router.put('/:id', orderController.updateOrder);

export default router;