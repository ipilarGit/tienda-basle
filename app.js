const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require("body-parser");

// Settings
const PORT = process.env.PORT || 3000;

// Middlewares & Config
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Start server
app.listen(PORT, () => {
    console.log('Servidor Encendido')
});

const { getProducts } = './consultas';

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

// Todos los productos
app.get('/products', async(req, res) => {
    try {
        const productos = await getProducts();

        res.send(productos);
    } catch {
        console.log(e);
        res.status(500).send(
            {
                error: "500 Internal Server Error",
                message: e
            });
    }
})



