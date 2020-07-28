import { Model, DataTypes } from 'sequelize';

import sequelize from '.';
import { OrderStatus } from '../components/constants';

class Order extends Model {
  public id: string;

  public total: number;

  public finalTotal: number;

  public status: OrderStatus;

  public createdAt: Date;

  public updatedAt: Date;
}

Order.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  finalTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      len: {
        args: [2, 5],
        msg: 'Name must be from 2 to 5 characters in length',
      },
    },
  },
  status: {
    type: DataTypes.ENUM(OrderStatus.InProcess, OrderStatus.Done),
  },
}, {
  sequelize,
  tableName: 'Order',
});

export default Order;
