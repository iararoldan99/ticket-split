import dotenv from 'dotenv';

import { connectDB } from './db/db.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Servidor de Express funcionando' });
});

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
