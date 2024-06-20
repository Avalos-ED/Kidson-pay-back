const { response } = require('express');
const Usuario = require('../models/usuario');
const CodigoPostal = require('../models/codigoPostal');


const getBusquedas = async (req, res = response) => {
    const busqueda = req.params.busqueda;
    const regex = new RegExp( busqueda, 'i' );
    const [usuarios, codigoPostal ] = await Promise.all([
        Usuario.find({ nombre: regex }),
        CodigoPostal.find({ d_asenta: regex })
    ])

    return res.status(200).json({
        ok:true,
        usuarios,
        codigoPostal
    })
}

const getBusquedasColeccion = async (req, res = response) => {
    const busqueda = req.params.busqueda;
    const tabla = req.params.tabla;
    const regex = new RegExp( busqueda, 'i' );
    let data;
    switch (tabla) {
        case 'usuario':
            data = await Usuario.find({ nombre: regex });
            break;
        case 'codigoPostal':
            data = await CodigoPostal.find({ d_asenta: regex });
            break;
        default:
            return res.status(400).json({
                ok: false,
                msg: 'Tabla no existe'
            })
            break;
    }
    /* const [usuarios, codigoPostal ] = await Promise.all([
        Usuario.find({ nombre: regex }),
        CodigoPostal.find({ d_asenta: regex })
    ]) */

    return res.status(200).json({
        ok:true,
        resultado: data
    })
}

module.exports = {
    getBusquedas,
    getBusquedasColeccion
}