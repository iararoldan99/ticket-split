const express = require('express');

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Bienvenido a mi server!");
})

app.listen(PORT, () => {
    console.log("Servidor corriendo en", PORT)
})