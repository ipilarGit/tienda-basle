# Ejercicio de Postulación

Construcción de una tienda online que despliegue productos agrupados 
por la categoria, ademas de implementar un buscador.

Se desarrollo con lenguaje Javascript, Jquery, Bootstrap, NodeJs, express, handlebars

Repositorio Girhub
https://git.heroku.com/prueba-test-mysql.git

Deploy Heroku:
https://prueba-test-mysql.herokuapp.com/

# app.get('/', catalogo)

En esta ruta se realizo una consulta a la base de datos ordenando por categoria 
los productos y se renderiza a la vista que muestra todos los productos. En esta vista tambien realice paginacion


# app.get("/busqueda/:input", productSearch)
Esta ruta se muestra el resultado de la busqueda, la consulta busca cualquier contenido que contenga el filtro ingresado, ya sea que se ingrese una descripcion o un campo numerico y  se renderiza a la vista Busqueda en la que se muestran todos los productos que coincidan con la busqueda. Se debe hacer click en buscar para que la busqueda se muestre.

# app.get("/categoria/:category", getProductsByCategory);
Esta ruta la desarrolle para la busqueda de los productos segun la categoria indicadas, las que se visualizan como bebida energetica, pisco, ron, bebida, snack, cerveza y vodka. Esta busqueda es por id de categria y se renderiza a la vista Busqueda

# app.get("/producto/:id", getProductById)
Esta ruta visualiza el producto al hacer click en el icono carrito para su posterior compra. Se realizan dos consultas a la base de datos para obtener el nombre de la categoria en donde el id de la categoria indicada en el producto sea igual a la categoria indicada en la tabla categoria y se renderiza a la vista Details que muestra el detalle del producto y el boton de Agregar al carrito

# app.get("/carrito", (req, res) => {
    res.render("Carrito");
})

Esta ruta renderiza la vista Carrito en la que se muestran los productos que se agregaron a la compra y que se almacenan en el localStorage. Los productos elegidos para la compra quedan en el localstorage hasta que se realice la compra y despues los elimino. Tambien desarrolle un boton que aumenta o disminuye la cantidad del producto que se desea llevar con el total respectivo. El boton de pagar solo entrega un mensaje de realizacion de la compra, no considere la implementacion del registro de la compra a la base de datos y tambien se deberia considerar renderizar a web pay o algo similar

# app.get("*", (req, res) => {
    res.render("Error");
  });

Esta ruta es el caso que la direccion a la que se intenta acceder no existe

Se implemento carrito pero falta la consideracion de pago.

