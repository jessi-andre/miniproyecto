const express = require('express'); /*llamando a express*/
const path = require('path');

var session = require('express-session');

const app = express();
app.use(express.static(path.resolve(__dirname, 'public')));


app.use(session({ secret: 'Secreto!!' })); /*session prueba*/

const port = 3002;
/*listen se encarga de levantar el servidor*/
app.listen(port, () => console.log("Servidor corriendo en el puerto " + port));

/*Rutas*/
/*Al obejto app le pedimos el método GET(PODRIAMOS TAMBIEN LLAMAR A OTRO MÉTODOS COMO POST, PUT, PATH O DELETE).El método recibe dos parámetros: El primero es un string que define la URL de la ruta. El segundo es un CALLBACK con dos parámetros: (req y res). req(pedido, contendrá todas las propiedades y métodos de la petición que llegó.), res(respuesta, contendrá todas las propiedades y métodos de la respuesta que vamos a enviar)*/

/* '/' => Representa la ruta a la que ha ingresado nuestro cliente. En este caso se trata de la raíz o HOME del sitio*/

/*SENDFILE() => Es parte  del objeto de respuesta de Express. Nos permite enviar fácilmente archivos existentes en nuestro servidor como respuesta a los pedidos del cliente. Acepta como parámetro una RUTA ABSOLUTA al archivo que estaremos enviando. Lo primero que vamos a necesitar es el módulo PATH. Este es un módulo  nativo y por eso  no hace falta instalarlo.*/

/*JOIN() => nos los brinda PATH. Este método se encargará de unir las piezas de nuestra ruta teniendo en cuenta el sistema operativo donde estemos (Mac, Windows o Linux). Dentro de JOIN, pondremos, separadas por comas, las piezas de nustras rutas.*/

/* __dinarme => es una constante de Node.js que hace referencia al directorio del archivo que se está ejecuntando*/

/*'/views/index.html' => es el PATH RELATIVO al archivo que queremos enviar. En este caso, dentro de la carpeta VIEWS, el archivo INDEX.HTML.*/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html')); /*Respuesta que se envia al navegador*/
})


module.exports = app;