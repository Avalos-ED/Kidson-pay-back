const { Schema, model, Collection} = require('mongoose');

const EstadoSchema = Schema ({
    estatus: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    }
}, {collection: 'estatus'});

module.exports = model('estatus', EstadoSchema)