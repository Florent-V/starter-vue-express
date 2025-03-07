// permission.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/connect.js';


const Plan = sequelize.define('Plan', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: 'plan',
  }
);

export default Plan;
