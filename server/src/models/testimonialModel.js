// permission.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/connect.js';

const Testimonial = sequelize.define('Testimonial', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'testimonial',
  }
);

export default Testimonial ;
