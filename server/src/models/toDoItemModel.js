import { DataTypes } from 'sequelize';
import sequelize from '../database/connect.js';

const TodoItem = sequelize.define('TodoItem', {
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
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  labelId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    references: {
      model: 'label',
      key: 'id'
    }
  },
  },
  {
    tableName: 'to_do_item',
  }
);

export default TodoItem;
