'use strict'

const Punch = require('../models/punch_in_out');
let resp = [];

const respuesta = (error, codigo, mensaje) => {
    return {
        error: error,
        codigo: codigo,
        mensaje: mensaje
    };
}

// #### Acciones ####

// Todos los usuarios
exports.getAllUser = async (req,res) => {
    try{
        const users = await Punch.find({activo:true})

        resp = respuesta(false, 200, 'Listado de usuarios');
        resp = {...resp, users:users}

        res.json(resp);
    }catch(error){
        resp = respuesta(true, 500, error);
        res.json(resp)
    }
}

// Un usuario en especifico
exports.getUser = async (req,res) => {
    try{
        const id = req.params.userId
        const user = await Punch.findById(id)

        resp = respuesta(false, 200, 'Usuario encontrado');
        resp = {...resp, user:user}

        res.json(resp);
    }catch(error){
        resp = respuesta(true, 500, error);
        res.json(resp)
    }
}

// Alta de un usuario
exports.addUser = async (req,res) => {
    try{
        const {user_id, user_name, date, punch_in, punch_out} = req.body;

        if(user_id && user_name){
            const nuevoUsuario = new Punch({user_id, user_name, date, punch_in, punch_out})
            await nuevoUsuario.save();

            resp = respuesta(false, 200, 'Usuario creado');
            resp = {...resp, usuario:nuevoUsuario}

            res.json(resp)
        }else{
            resp = respuesta(false, 502, 'El campo user id y user name  son requeridos');
            resp = {...resp, usuario:nuevoUsuario}

            res.json(resp)
        }
    }catch(error){
        resp = respuesta(true, 500, error);
        res.json(resp)
    }
}

// Alta de un usuarios
exports.addUsers = (req,res) => {
    try{

        const users = req.body.users;

        if(users){

            users.map(user =>{
                const nuevoUsuario = new Punch(user)
                nuevoUsuario.save();
            })

            resp = respuesta(false, 200, 'Usuarios creados correctamente');
            resp = {...resp, usuarios:users}

            res.json(resp)
        }

    }catch(error){
        resp = respuesta(true, 500, error);
        res.json(resp)
    }
}

// Actualizacion un usuario
exports.updateUser = async (req,res) => {
    try {
        const id = req.params.userId
        const data = req.body;

        if(id && data){
            const userActualizado = await Punch.findByIdAndUpdate(id, data)

            resp = respuesta(false, 200, 'Usuario Actualizado Correctamente');
            res.json(resp)
        }else{
            resp = respuesta(true, 500, 'Datos insufiecientes');
            res.json(resp)
        }

    } catch (error) {
        resp = respuesta(true, 500, error);
        res.json(resp)
    }
}

// Eliminar un usuario
exports.deleteUser = async (req,res)=>{
    try {
        const id = req.params.userId
        const eliminado = await Punch.findByIdAndUpdate(id, {activo: false})

        resp = respuesta(false, 200, 'Usuario Eliminado Correctamente');
        res.json(resp)
    } catch (error) {
        resp = respuesta(true, 500, error);
        res.json(resp)
    }

}