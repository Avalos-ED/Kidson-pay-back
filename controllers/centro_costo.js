const CentroCosto = require('../models/centroCosto');
const { response } = require('express');

const getCentroCosto = async (req, res = response) => {
    const centroCosto = await CentroCosto.find();
    return res.status(200).json({
        ok:true,
        centroCosto
    })
}

const crearCentroCosto = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'crearCentroCosto'
    })
}

const actualizarCentroCosto = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'actualizarCentroCosto'
    })
}

const borrarCentroCosto = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'borrarCentroCosto'
    })
}

module.exports = {
    getCentroCosto,
    crearCentroCosto,
    actualizarCentroCosto,
    borrarCentroCosto
}