const Estado = require('../models/estado');
const { response } = require('express');

const getEstado = async (req, res = response) => {

    const estado = await Estado.find();
    return res.status(200).json({
        ok:true,
        estado
    })
}

const crearEstado = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'crearEstado'
    })
}

const actualizarEstado = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'actualizarEstado'
    })
}

const borrarEstado = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'borrarEstado'
    })
}

module.exports = {
    getEstado,
    crearEstado,
    actualizarEstado,
    borrarEstado
}