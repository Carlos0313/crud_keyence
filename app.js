'use strict'

//Importamps Express y rutas
const express = require('express');
const conexionDB = require('./db.conexion');
const routes = require('./routes/punch_router'); 
const cors = require('cors')  //use this
const app = express();

//Conexion a la DB
conexionDB();

//Middleware 
app.use(express.json());
app.use(cors())

// Cargamos las rutas
routes.route('/').get((req,res)=>{
    resp = respuesta(true, 200, 'Error esta ruta no esta activa')
    res.send(resp);
})

app.use('/api/', routes);


module.exports = app;
