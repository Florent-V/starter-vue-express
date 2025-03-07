// permission.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/connect.js';



const Permission = sequelize.define('Permission', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'permission',
  }
);
export default Permission;
