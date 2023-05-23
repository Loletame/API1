const express = require('express');
const router = express.Router();
const usuariosController = require('./../controllers/usuarioController');

//Definimos las rutas y derivamos al controlador correspondiente

router.get('/', usuariosController.getUser);
//router.get('/', usuariosController.getUserById);
//router.post('/', usuariosController.crearUsuario);

module.exports = router;

