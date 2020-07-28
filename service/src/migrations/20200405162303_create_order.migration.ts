import { QueryInterface, DataTypes } from 'sequelize';

import { OrderStatus } from '../components/constants';

const migration = {
  up: (queryInterface: QueryInterface) => queryInterface.createTable('Order', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    final_total: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM(OrderStatus.InProcess, OrderStatus.Done),
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }),
};

export default migration;
