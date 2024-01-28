import { DataTypes } from 'sequelize';
import { connection } from '../db';

const userModel = connection.define('user', {
  id_user: {
    type: DataTypes.STRING(300),
    primaryKey: true,
    allowNull: false,
  },
  user: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE(),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  address_line1: {
    type: DataTypes.STRING(300),
    allowNull: true,
  },
  address_line2: {
    type: DataTypes.STRING(300),
    allowNull: true,
  },
  postalCode: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  neighborhood: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  level: {
    type: DataTypes.ENUM('admin', 'manager', 'employee'),
    allowNull: false,
  },
  active: {
    type: DataTypes.ENUM('active', 'inactive'),
    allowNull: false,
  },
  id_store: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE(),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE(),
    allowNull: false,
  },
});

function createTableUser() {
  return userModel.sync({ force: false }).then(() => {
    console.log('*******User table successfully created*******');
  });
}

export { userModel, createTableUser };
