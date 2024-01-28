import { DataTypes } from 'sequelize';
import { connection } from '../db';

const pointRecordModel = connection.define('pointRecord', {
  id_pointRecord: {
    type: DataTypes.STRING(300),
    primaryKey: true,
    allowNull: false,
  },
  id_user: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  checkIn: {
    type: DataTypes.DATE(),
    allowNull: false,
  },
  checkInLunch: {
    type: DataTypes.DATE(),
    allowNull: true,
  },
  checkOutLunch: {
    type: DataTypes.DATE(),
    allowNull: true,
  },
  checkOut: {
    type: DataTypes.DATE(),
    allowNull: true,
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

function createTablePointRecord() {
  return pointRecordModel.sync({ force: false }).then(() => {
    console.log('*******Point Record table successfully created*******');
  });
}

export { pointRecordModel, createTablePointRecord };
