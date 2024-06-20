/**
 * Tipo
 * Ruta: /api/tipo
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const {
    getTipo,
    crearTipo,
    actualizarTipo,
    borrarTipo
} = require('../controllers/tipo');

const router = Router();

router.get( '/', getTipo);

router.post( 
    '/',
    [], 
    crearTipo
);

router.put( 
    '/:id',
    [], 
    actualizarTipo
);

router.delete( '/:id', borrarTipo);

module.exports = router;