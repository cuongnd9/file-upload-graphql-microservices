import {
  middleware, validateSchema, joi, startJob,
} from '../components';
import OrderService from '../services/order.service';
import { OrderStatus } from '../components/constants';

const resolver = {
  orders: middleware(
    () => OrderService.getOrders()
  ),
  order: middleware(
    ({ id }: { id: string }) => OrderService.getOrder(id)
  ),
  createOrder: middleware(
    validateSchema({
      finalTotal: joi.number().min(0).max(1000),
      total: (joi as any).number().min(0).greaterOrEqual(joi.ref('finalTotal')).max(2000),
    }),
    async (obj: { total: number; finalTotal: number }) => {
      const createdOrder = await OrderService.createOrder({
        total: obj.total,
        finalTotal: obj.finalTotal,
        status: OrderStatus.InProcess,
      });
      await startJob({
        bpmnProcessId: 'order_creation_workflow',
        variables: {
          cartValue: createdOrder.finalTotal,
        },
      });
      return createdOrder;
    }
  ),
};

export default resolver;
