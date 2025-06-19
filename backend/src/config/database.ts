import { Sequelize } from 'sequelize-typescript';
import { Message } from '../models/message.model';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [Message],
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
});

export const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('Database connected and synced');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

export default sequelize;