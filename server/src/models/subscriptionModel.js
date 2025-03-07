// permission.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/connect.js';

const Subscription  = sequelize.define('Subscription', {
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'subscription',
  }
);
export default Subscription ;
