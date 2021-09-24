const express = require('express') /*llamando a express*/
const path = require('path');

var session = require('express-session');

const app = express();
app.use(express.static('public'));


app.use(session({secret: 'Secreto!!'})); /*session prueba*/

const port =3002;

 app.listen(port, () => console.log("Servidor corriendo en el puerto " + port));
 /*req(pedido), res(respuesta)*/
 app.get('/', (req, res) => {
res.sendFile( path.join(__dirname, './views/index.html'));
    })  


    module.exports = app;