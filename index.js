'use strict'

const app = require('./app'); // configuración de Express

//Inicializa el servidor en el puerto 3500
app.listen(app.get("port"), () => {
    console.log(`servidor corriendo en http://localhost:${app.get("port")}`);
});