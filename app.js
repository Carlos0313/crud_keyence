'use strict'

//Importamps Express y rutas
const express = require('express');
const conexionDB = require('./db.conexion');
const routes = require('./routes/punch_router'); 
const app = express();

//Conexion a la DB
conexionDB();

//Middleware 
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Cargamos las rutas
routes.route('/').get((req,res)=>{
    resp = respuesta(true, 200, 'Error esta ruta no esta activa')
    res.send(resp);
})

app.use('/api/', routes);


module.exports = app;
