const express = require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");

const app = express();

// Middlewares & Config
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor Encendido')
});

const { getProducts } = './consultas';

// Route
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



