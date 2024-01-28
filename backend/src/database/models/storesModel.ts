import { DataTypes } from 'sequelize';
import { connection } from '../db';

const storeModel = connection.define('store', {
  id_store: {
    type: DataTypes.STRING(300),
    primaryKey: true,
    allowNull: false,
  },
  store: {
    type: DataTypes.STRING(300),
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
  active: {
    type: DataTypes.ENUM('active', 'inactive'),
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

function createTableStore() {
  return storeModel.sync({ force: false }).then(() => {
    console.log('*******Store table successfully created*******');
  });
}

export { storeModel, createTableStore };
