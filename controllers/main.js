const connection = require("../conection.js");

const catalogo = (req, res) => {

    const sql = 'SELECT * FROM product ORDER BY category';
    connection.query(sql, (error, productos) => {
        if (error) { res.json(error) };
        if (productos) {
            const { pag } = req.query;
            const pageQ = Math.ceil(productos.length / 10);
            pag
                ? (productos = productos.slice(pag * 10 - 10, pag * 10))
                : (productos = productos.slice(0, 10));
            res.render("Catalogo", {
                productos,
                pageQ,
                pag: pag || 1,
            });
        } else {
            res.send('Not result');
        }
    });
}

const productSearch = (req, res) => {

    const { filtro, input } = req.params;
console.log(filtro,'  ',input)

    const sql = `SELECT * FROM product WHERE name LIKE '%${input}%' OR price LIKE '${input}%'`;
    connection.query(sql, (error, productos) => {
        if (error) { res.json(error) };

        console.log(productos);
/* 
        let filtrosss = Object.keys(productos[0]);
        filtros = filtrosss.filter((f) => f != 'url_image'); */
     /*    const { filtro, input } = req.params;

        let all_ProductsLabels = productos.map((p) => p.category);
        all_ProductsLabels = [...new Set(all_ProductsLabels)]; */
     /*    if (filtro == "todos") {
            productos = productos.filter((p) => {
                let valoresDeBusqueda = Object.values(p).map((v) => {
                    if ((v) != null) {
                        v.toString().toLocaleLowerCase()
                    }
                }
                );
                return valoresDeBusqueda.includes(input.toLocaleLowerCase());
            });
        } else {
            productos = productos.filter((p) => {
                return p[filtro].toString().toLowerCase().includes(input.toLowerCase());
            });
        } */

        res.render("Busqueda", {
            productos: productos.length >= 1 ? productos : null
        });
    })
}

const getProductsByCategory = (req, res) => {

    const { category } = req.params;
console.log(category)

    const sql = `SELECT * FROM product WHERE category  = ${category}`;
    connection.query(sql, (error, productos) => {
        if (error) { res.json(error) };

        console.log(productos);
        res.render("Busqueda", {
            productos: productos.length >= 1 ? productos : null
        });
    })

}


const getProductById = (req, res) => {

    const { id } = req.params;
    console.log(id);
    
    const sql = 'SELECT * FROM product';
    connection.query(sql, (error, products) => {
        if (error) { res.json(error) };
     let productos = products;

     const sql = 'SELECT * FROM category';
     connection.query(sql, (error, categoriess) => {
         if (error) { res.json(error) };
      let categories= categoriess;
      productos.forEach((p) => {
        p.category = categories.find((c) => c.id == p.category).name;
      });
      let producto = productos.find((p) => p.id == id);
      res.render("Details", { producto, productoData: JSON.stringify(producto) });
     })  
    })  
} 

module.exports = { catalogo, productSearch, getProductById , getProductsByCategory}