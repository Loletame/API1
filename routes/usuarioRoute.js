const express = require('express');
const router = express.Router();
const usuariosController = require('./../controllers/usuarioController');

//Definimos las rutas y derivamos al controlador correspondiente

router.get('/', usuariosController.getUser);
router.get('/:id', usuariosController.getUserById);
router.post('/', usuariosController.createUsuario);
router.put('/:id', usuariosController.updateUsuario);
router.delete ('/:id', usuariosController.deleteUsuarioById)


module.exports = router;

