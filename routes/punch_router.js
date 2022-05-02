'use strict'

const { Router } = require('express');
const punch_router = Router();
const UserController = require('../controllers/punch_in_out');

//Peticiones

punch_router.route('/users')
    .get(UserController.getAllUser)
    .post(UserController.addUsers)

punch_router.route('/user')
    .post(UserController.addUser)

punch_router.route('/user/:userId')
    .get(UserController.getUser)
    .put(UserController.updateUser)
    .delete(UserController.deleteUser)

module.exports = punch_router;