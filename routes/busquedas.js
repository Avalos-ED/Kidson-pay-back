/**
 * Busquedas
 * Ruta: api/todo/:busqueda
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const {
    getBusquedas,
    getBusquedasColeccion
} = require('../controllers/busquedas');

const router = Router();

router.get( '/:busqueda', validarJWT, getBusquedas);
router.get( '/coleccion/:tabla/:busqueda', validarJWT, getBusquedasColeccion);

module.exports = router;