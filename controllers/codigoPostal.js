const CodigoPostal = require('../models/codigoPostal');
const { response } = require('express');

const getCodigoPostal = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    /* const codigoPostal = await CodigoPostal
                                .find()
                                .skip( desde )
                                .limit( 20 );

    const total = await CodigoPostal.countDocuments(); */

    const [ codigoPostal, total ] = await Promise.all([
        CodigoPostal
            .find()
            .skip( desde )
            .limit( 20 ),
            
        CodigoPostal.countDocuments()
    ])

    return res.status(200).json({
        ok:true,
        codigoPostal,
        total
    })
}

const crearCodigoPostal = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'crearCodigoPostal'
    })
}

const actualizarCodigoPostal = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'actualizarCodigoPostal'
    })
}

const borrarCodigoPoastal = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'borrarCodigoPoastal'
    })
}

module.exports = {
    getCodigoPostal,
    crearCodigoPostal,
    actualizarCodigoPostal,
    borrarCodigoPoastal
}