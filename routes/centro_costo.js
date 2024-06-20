/**
 * Centros de Costo
 * Ruta: /api/centro_costo
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const {
    getCentroCosto,
    crearCentroCosto,
    actualizarCentroCosto,
    borrarCentroCosto
} = require('../controllers/centro_costo');

const router = Router();

router.get( '/', getCentroCosto);

router.post( 
    '/',
    [], 
    crearCentroCosto
);

router.put( 
    '/:id',
    [], 
    actualizarCentroCosto
);

router.delete( '/:id', borrarCentroCosto);

module.exports = router;