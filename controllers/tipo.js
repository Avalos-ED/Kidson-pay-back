const Tipo = require('../models/tipo');
const { response } = require('express');

const getTipo = async (req, res = response) => {

    const tipo = await Tipo.find();
    return res.status(200).json({
        ok:true,
        tipo
    })
}

const crearTipo = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'crearTipo'
    })
}

const actualizarTipo = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'actualizarTipo'
    })
}

const borrarTipo = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'borrarTipo'
    })
}

module.exports = {
    getTipo,
    crearTipo,
    actualizarTipo,
    borrarTipo
}