/**
 * Estado
 * Ruta: /api/estado
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const {
    getEstado,
    crearEstado,
    actualizarEstado,
    borrarEstado
} = require('../controllers/estado');

const router = Router();

router.get( '/', getEstado);

router.post( 
    '/',
    [], 
    crearEstado
);

router.put( 
    '/:id',
    [], 
    actualizarEstado
);

router.delete( '/:id', borrarEstado);

module.exports = router;