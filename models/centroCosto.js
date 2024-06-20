const { Schema, model, Collection } = require('mongoose');

const CentroCostoSchema = Schema ({
    centroCosto: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    responsable: {
        type: String,
        required: true
    },
    centroBeneficio: {
        type: String,
        required: true
    },
    fechaInicio: {
        type: String,
        required: true
    },
    fechaTermino: {
        type: String,
        required: true
    },
    estatus: {
        type: String,
        required: true
    },
    observaciones: {
        type: String
    }
}, { collection: 'centro_costo'});


module.exports = model('centro_costo', CentroCostoSchema);