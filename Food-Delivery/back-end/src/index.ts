import express from 'express';
import cors from 'cors';
import { connectDatabase } from './utils/database';
import { auth } from './router/User';
import { food } from './router/Food';
import { category } from './router/Catergory';
import { order } from './router/Order';
const PORT = 8000;

const start = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  connectDatabase();

  app.use('/auth', auth);
  app.use('/food', food);
  app.use('/category', category);
  app.use('order', order);

  app.get('/', (req, res) => {
    res.status(200).send({ success: true, msg: 'Hello world' });
  });

  app.listen(PORT, () => {
    console.log('Server is running');
  });
};

start();