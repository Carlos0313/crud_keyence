'use strict'

const app = require('./app'); // configuración de Express
const { PORT=3000, LOCAL_ADDRESS='0.0.0.0' } = process.env

//Inicializa el servidor en el puerto 3500
app.listen(PORT, LOCAL_ADDRESS, () => {
    const address = app.address();
    console.log(`servidor corriendo en http://localhost:${PORT} address: ${address} `);
});