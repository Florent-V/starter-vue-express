// permission.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/connect.js';

const Feature  = sequelize.define('Feature', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: 'feature',
  }
);

export default Feature ;
