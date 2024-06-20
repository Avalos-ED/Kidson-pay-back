const { Schema, model } = require('mongoose');

const TipoSchema = Schema ({
    descripcion: {
        type: String,
        required: true
    },
    grupo: {
        type: String
    },
    comentarios: {
        type: String
    }
}, { collection: 'tipos'});

module.exports = model('tipos', TipoSchema);