const { Schema, model } = require('mongoose');

const PuntoVentaSchema = Schema ({
    description: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
    },
    importe_renta: {
        type: Number,
    },
    fecha_inicio: {
        type: String,
    },
    fecha_termino: {
        type: String,
    },
    contrato: {
        type: String,
    },
    observacion: {
        type: String,
    },
    img: {
        type: String
    }
}, { collection: 'punto_venta'});

module.exports = model('punto_venta', PuntoVentaSchema);