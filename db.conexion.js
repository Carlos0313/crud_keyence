var mongoose = require('mongoose'); 

//Conexion con la base de datos 
//const DATABASE = 'mongodb://localhost/keyence_prueba';
const DATABASE = 'mongodb+srv://carlos:Passw0rd@keyence.2u7jg.mongodb.net/keyence_prueba?retryWrites=true&w=majority'
const conexionDB = async () =>{
    try{
       const DB = await mongoose.connect(DATABASE)
       console.log(`La conexión a la base de datos ${DB.connection.name} se ha realizado correctamente`)
    }catch(err){
        console.log(err)
    }
}

module.exports = conexionDB;

