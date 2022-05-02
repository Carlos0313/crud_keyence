var mongoose = require('mongoose'); 

//Conexion con la base de datos 
const DATABASE = 'mongodb://localhost/keyence_prueba';

const conexionDB = async () =>{
    try{
       const DB = await mongoose.connect(DATABASE)
       console.log(`La conexión a la base de datos ${DB.connection.name} se ha realizado correctamente`)
    }catch(err){
        console.log(err)
    }
}

module.exports = conexionDB;

