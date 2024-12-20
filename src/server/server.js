import dotenv from 'dotenv';

import { connectDB } from './db/db.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js';
import movementRoutes from './routes/movements.routes.js';
import projectRoutes from './routes/project.routes.js';
import * as bodyParser from "express";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use('/api/', userRoutes);
app.use('/api/', movementRoutes);
app.use('/api/', projectRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Servidor de Express funcionando' });
});

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
