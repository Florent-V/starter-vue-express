// permission.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/connect.js';

const Payment = sequelize.define('Payment', {
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'payment',
  }
);
export default Payment;
