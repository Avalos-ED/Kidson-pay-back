/**
 * Juego
 * Ruta: /api/juego
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const {
    getJuego,
    crearJuego,
    actualizarJuego,
    borrarJuego
} = require('../controllers/juego');

const router = Router();

router.get( '/', getJuego);

router.post( 
    '/',
    [
        validarJWT,
        check('centroCosto', 'El centro de costo debe ser valido').isMongoId(),
        check('codigoPostal', 'El codigo postal debe ser valido').isMongoId(),
        check('estado', 'El estado debe ser valido').isMongoId(),
        check('puntoVenta', 'El punto de venta de costo debe ser valido').isMongoId(),
        check('tipo', 'El tipo debe ser valido').isMongoId(),
        validarCampos
    ], 
    crearJuego
);

router.put( 
    '/:id',
    [], 
    actualizarJuego
);

router.delete( '/:id', borrarJuego);

module.exports = router;