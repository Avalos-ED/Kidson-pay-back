const PuntoVenta = require('../models/puntoVenta');
const { response } = require('express');

const getPuntoVenta = async (req, res = response) => {

    const puntoVenta = await PuntoVenta.find();
    return res.status(200).json({
        ok:true,
        puntoVenta
    })
}

const crearPuntoVenta = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'crearPuntoVenta'
    })
}

const actualizarPuntoVenta = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'actualizarPuntoVenta'
    })
}

const borrarPuntoVenta = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'borrarPuntoVenta'
    })
}

module.exports = {
    getPuntoVenta,
    crearPuntoVenta,
    actualizarPuntoVenta,
    borrarPuntoVenta
}