/**
 * Auth
 * Ruta: /api/login
 */

const { Router } = require('express');
const { login, googleSignIn, renewToke } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post(
    '/',
    [
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos
    ], 
    login
);

router.get(
    '/renew', 
    validarJWT, 
    renewToke
);

module.exports = router;