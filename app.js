const express = require('express');
const exphbs = require("express-handlebars");
const Handlebars = require("handlebars");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const connection = require('./conection');
const { catalogo, productSearch , getProductById, getProductsByCategory} = require("./controllers/main");

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
    console.log('Server ON')
});

// Routes
// all products por category
app.get('/', catalogo);

//filtrar por busqueda de producto
app.get("/busqueda/:input", productSearch)

app.get("/categoria/:category", getProductsByCategory);

app.get("/producto/:id", getProductById);

app.get("/carrito", (req, res) => {
    res.render("Carrito");
});

app.get("*", (req, res) => {
    res.render("Error");
  });



