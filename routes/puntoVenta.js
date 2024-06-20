/**
 * Punto Venta
 * Ruta: /api/punto_venta
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const {
    getPuntoVenta,
    crearPuntoVenta,
    actualizarPuntoVenta,
    borrarPuntoVenta
} = require('../controllers/puntoVenta');

const router = Router();

router.get( '/', getPuntoVenta);

router.post( 
    '/',
    [], 
    crearPuntoVenta
);

router.put( 
    '/:id',
    [], 
    actualizarPuntoVenta
);

router.delete( '/:id', borrarPuntoVenta);

module.exports = router;