require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);



const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.nrflflh.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(uri).then(() => {
    console.log("Conexión exitosa a la base de datos");
}).catch(e => console.log(e))

/*

app.use((req, res, next) => {res.status(404).sendFile(__dirname + '/public/404.html')});
*/

//MOTOR DE PLANTILLAS Y RUTA.
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', require('./router/rutasWeb.js'));
app.use('/escuderias', require('./router/escuderias.js'));

app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    res.status(404).render("404", {titulo: 'Página no encontrada'});
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);       
});