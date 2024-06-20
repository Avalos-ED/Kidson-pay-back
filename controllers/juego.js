const Juego = require('../models/juego');
const { response } = require('express');

const getJuego = async (req, res = response) => {

    const juego = await Juego.find()
                                .populate('centroCosto',['centroCosto','descripcion','responsable'])
                                .populate('codigoPostal',['d_codigo','d_asenta','d_tipo_asenta','d_ciudad','d_estado'])
                                .populate('estado',['estatus','descripcion'])
                                .populate('puntoVenta',['descripcion','ubicacion'])
                                .populate('tipo','descripcion')
                                .populate('usuario','nombre');
                                
    return res.status(200).json({
        ok:true,
        juego
    })
}

const crearJuego = async(req, res = response) => {
    const uid = req.uid;
    const juego = new Juego({
        ...req.body,
        usuario: uid
    });

    try {
        const juegoDB = await juego.save();
        return res.status(200).json({
            ok:true,
            juego: juegoDB
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const actualizarJuego = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'actualizarJuego'
    })
}

const borrarJuego = (req, res = response) => {
    return res.status(200).json({
        ok:true,
        msg: 'borrarJuego'
    })
}

module.exports = {
    getJuego,
    crearJuego,
    actualizarJuego,
    borrarJuego
}