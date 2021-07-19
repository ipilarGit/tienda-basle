Ejercicio de Postulación
-------------------------
Construcción de una tienda online que despliegue productos agrupados 
por la categoria, ademas de implementar un buscador.

Se desarrollo con lenguaje Javascript, Jquery, Bootstrap, NodeJs, Express, Handlebars

Repositorio Github
https://git.heroku.com/prueba-test-mysql.git

Deploy Heroku:
https://prueba-test-mysql.herokuapp.com/

Explicacion Back- End:
----------------------

app.get('/', catalogo) 

En esta ruta realize una consulta a la base de datos ordenando por categoria 
los productos y se renderiza a la vista "Catalogo" que muestra todos los productos. 
En esta vista tambien realice paginación.

app.get("/busqueda/:input", productSearch)

Esta ruta se muestra el resultado de la busqueda, la consulta busca cualquier contenido que contenga el filtro ingresado, ya sea que se ingrese una descripcion o un campo numerico y  se renderiza a la vista "Busqueda" en la que se muestran todos los productos que coincidan con la busqueda. Se debe hacer click en buscar para que la busqueda se muestre o hacer enter despues de ingresar la palabra.

app.get("/categoria/:category", getProductsByCategory)

Esta ruta la desarrolle para la busqueda de los productos segun la categoria indicadas, las que se visualizan como bebida energetica, pisco, ron, bebida, snack, cerveza y vodka. Esta busqueda es por id de categria y se renderiza a la vista "Busqueda"

app.get("/producto/:id", getProductById)

Esta ruta visualiza el producto al hacer click en el icono carrito para su posterior compra. Se realizan dos consultas a la base de datos para obtener el nombre de la categoria en donde el id de la categoria indicada en el producto sea igual a la categoria indicada en la tabla categoria y se renderiza a la vista Details que muestra el detalle del producto y el boton de Agregar al carrito


app.get("/carrito", (req, res) => {
    res.render("Carrito");
})

Esta ruta renderiza la vista Carrito en la que se muestran los productos que se agregaron a la compra y que se almacenan en el localStorage. Los productos elegidos para la compra quedan en el localstorage hasta que se realice la compra y despues los elimino. Tambien desarrolle un boton que aumenta o disminuye la cantidad del producto que se desea llevar con el total respectivo. El boton de pagar solo entrega un mensaje de realizacion de la compra, no considere la implementacion del registro de la compra a la base de datos y tambien se deberia considerar renderizar a web pay o algo similar

app.get("*", (req, res) => {
    res.render("Error");
  });

Esta ruta es en el caso que la dirección a la que se intenta acceder no existe

Explicacion Front-End:
---------------------
main.handlebars
Esta plantilla es la contenido dinámico principal que utiliza el sitio web, en la que se definen los parciales Head, Navbar y body 

Head.handlebars
Esta vista o plantilla es un componente que define la parte de la estructura del archivo html que correponde al head y en el que se especifican los CDN que necesite para la realizacion de este test y los estilos particulares.

Navbar.handlebars
Este template corresponde al menu de navegacion que contiene toda la pagina, a las cuales se puede acceder dentro de la pagina, link al inicio, carrito y busqueda de productos. Además realice una tabla para definir las categorias de manera fija presentes en en test

Busqueda.handlebars
Este template lo utilice para renderizar las variables y condiciones dentro del html que se obtienen de la peticion de busqueda de un producto. Si la peticion no arroja resultados, indica mensaje de error y en el caso que existan codigo de bootstrap para visualizar la imagen, nombre, precio y porcentaje de descuento.

Catalogo.handlebars
Este template lo utilice para renderizar todos los productos con la utilizacion de bootstrap para que se muestran al iniciar la pagina. Para el caso en el que ese producto no tenga imagen, se realizo una validacion en el servidor que permite mostrar una imagen de muestra.  El codigo de paginacion es una formula.

Details.handlebars
Esta plantilla renderiza otra porcion de codigo html que muestra el producto y da la opcion con un boton para agregarlo al carrito. Si este producto es agregdo se almacena en el localstorage como almacenamiento temporal y se redirecciona al inicio

Carrito.handlebars
Esta vista corresponde al icono carrito del menu principal que toma los productos almacenados en el localstorage y los despliega en el html definido. Tambien realice la opcion de aumentar o disminuir la cantidad de ese producto. El boton de pagar, efectua la simulacion de que se redirige a la web de pago. Esta informacion de los prodctos elegidos para la compra no se almacenan en la base de datos, solo elimina los datos almacenado en el localstorage.

Error.handlebars
Esta plantilla es solo codigo bootstrap para indicar que la pagina que se intenta consultar no existe.
# tienda_bsale
# tienda_bsale
