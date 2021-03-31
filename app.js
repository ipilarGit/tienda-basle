const express = require('express');
const exphbs = require("express-handlebars");
const Handlebars = require("handlebars");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const connection = require('./conection');

// Settings
const PORT = process.env.PORT || 3001;

// Middlewares & Config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static(__dirname + "/assets"));

app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main",
        layoutsDir: path.join(__dirname, "./views/mainLayout"),
        partialsDir: path.join(__dirname, "./views/components"),
    })
);
app.set("view engine", "handlebars");

Handlebars.registerHelper("prev", (pag) => (pag == 1 ? 1 : Number(pag) - 1));

Handlebars.registerHelper("next", (pag, max) =>
    pag == max ? pag : Number(pag) + 1
);

// Start server
app.listen(PORT, () => {
    console.log('Servidor Encendido')
});


// Routes
/* app.get('/', (req, res) => {
    res.send('Bienvenido');
}); */

// all products por category
app.get('/', (req, res) => {

    const sql = 'SELECT * FROM product ORDER BY category';

    connection.query(sql, (error, productos) => {
        if (error) { res.json(error) };
        
        if (productos.length >= 0) {
            console.log({ data: productos });
            //   let productos = rows;
            const { pag } = req.query;
            const pageQ = Math.ceil(productos.length / 10);
            pag
                ? (productos = productos.slice(pag * 10 - 10, pag * 10))
                : (productos = productos.slice(0, 10));
            res.render("Catalogo", {
                //  productos: JSON.stringify(products),
                productos,
                pageQ,
                pag: pag || 1,
            });
            //  res.json(results);
        } else {
            res.send('Not result');
        }
    });

});

app.get("*", (req, res) => {
    res.render("Error");
  });



