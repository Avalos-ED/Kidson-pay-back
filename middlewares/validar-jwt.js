const { response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) => {

    //Leer el Token
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            megs: 'Se requiere de un token'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token invalido'
        });
    }
}

module.exports = {
    validarJWT
}