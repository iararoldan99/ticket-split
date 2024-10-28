const { connectDB } = require('./db.js');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({ message: 'Servidor de Express funcionando' });
});

const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});