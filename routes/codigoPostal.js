/**
 * Codigo Postal
 * Ruta: /api/codigo_postal
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const {
    getCodigoPostal,
    crearCodigoPostal,
    actualizarCodigoPostal,
    borrarCodigoPoastal,
    getCodigoPostalByCP
} = require('../controllers/codigoPostal');

const router = Router();

router.get( '/', validarJWT , getCodigoPostal);
router.get( '/:cp', validarJWT , getCodigoPostalByCP);

router.post( 
    '/',
    [], 
    crearCodigoPostal
);

router.put( 
    '/:id',
    [], 
    actualizarCodigoPostal
);

router.delete( '/:id', borrarCodigoPoastal);

module.exports = router;