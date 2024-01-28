import { Sequelize } from 'sequelize';
import { env } from '../env';

const connection = new Sequelize(
  env.DATABASE_HOST,
  env.DATABASE_USER,
  env.DATABASE_PASSWORD,
  {
    host: env.DATABASE_URL,
    dialect: 'mysql',
  }
);

async function createConnectionDataBase() {
  try {
    await connection.authenticate();
    console.log('*******Connection made to the database!*******');
  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
}

export { connection, createConnectionDataBase };
