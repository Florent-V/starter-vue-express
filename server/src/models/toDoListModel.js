import { DataTypes } from 'sequelize';
import sequelize from '../database/connect.js';

const TodoList = sequelize.define('TodoList', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  },
  {
    tableName: 'to_do_list',
  }
);

export default TodoList;
