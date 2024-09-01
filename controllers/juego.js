const Juego = require('../models/juego');
const { response } = require('express');

const getJuego = async (req, res = response) => {

    const juego = await Juego.find()
                                .populate('centroCosto',['centroCosto','descripcion','responsable','centroBeneficio'])
                                .populate('codigoPostal',['d_codigo','d_asenta','d_tipo_asenta','d_ciudad','d_estado','c_estado'])
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
    try {
        /**
         * Generando el consecutivo para el juevo
         */
        const jg = await Juego.findOne().sort({consecutivo: -1}).limit(1);
        let conseOld = 1;
        if(jg){
            conseOld = +jg.consecutivo
            conseOld += 1;
        }
        let conse = ""+conseOld;
        switch (conse.length) {
            case 1:
                conse = "00"+conse;
                break;
            case 2:
                conse = "0"+conse;
                break;
            default:
                conse = ""+conse;
                break;
        }
        let year = ""+(new Date()).getFullYear();
        const inmovilizado = 'KSP'+ year.substring(2) +conse;

        const juego = new Juego({
            ...req.body,
            consecutivo: conse,
            inmovilizado: inmovilizado,
            usuario: uid
        });
        const juegoDB = await juego.save();
        return res.status(200).json({
            ok:true,
            //juego
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

const actualizarJuego = async(req, res = response) => {
    const id = req.params.id;
    const uid = req.uid;

    try {

        const juego = await Juego.findById( id );

        if ( !juego ){
            return res.status(404).json({
                ok: false,
                msg: 'Hospital no encontrado'
            });
        }

        const cambiosJuego = {
            ...req.body,
            usuario: uid
        }
        const JuegoActualizado = await Juego.findByIdAndUpdate( id, cambiosJuego, { new: true });

        return res.status(200).json({
            ok: true,
            jugo: JuegoActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con e administrador'
        })
    }
    
}

const borrarJuego = async(req, res = response) => {
    const id = req.params.id;

    try {

        const juego = await Juego.findById( id );

        if ( !juego ){
            return res.status(404).json({
                ok: false,
                msg: 'Hospital no encontrado'
            });
        }

        await Juego.findByIdAndDelete(id);

        return res.status(200).json({
            ok: true,
            msg: 'Juego eliminado'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con e administrador'
        })
    }
}

module.exports = {
    getJuego,
    crearJuego,
    actualizarJuego,
    borrarJuego
}