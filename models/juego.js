const { Schema, model} = require('mongoose');

const JuegoSchema = Schema ({
    consecutivo: {
        type: String,
        required:true
    },
    denominacion: {
        type: String,
        required:true
    },
    descripcionGenerales: {
        type: String,
        required:true
    },
    fechaAlta: {
        type: String,
        required:true
    },
    creditoInicial: {
        type: String,
        required:true
    },
    numeroSerie: {
        type: String,
        required:true
    },
    token: {
        type: String,
        required:true
    },
    documento: {
        type: String,
    },
    imgMontable: {
        type: String,
    },
    inmovilizado: {
        type: String,
        required:true
    },
    valorAdquisicion: {
        type: String,
        required:true
    },
    depreciacion: {
        type: String,
        required:true
    },
    valorContable: {
        type: String,
        required:true
    },
    comision: {
        type: String,
        required:true
    },
    vidaUtil: {
        type: String,
        required:true
    },
    proveedor: {
        type: String,
        required:true
    },
    paisOrigen: {
        type: String,
        required:true
    },
    subtotal: {
        type: String,
        required:true
    },
    envio: {
        type: String,
        required:true
    },
    total: {
        type: String,
        required:true
    },
    fecha: {
        type: String,
        required:true
    },
    observacion: {
        type: String,
        required:true
    },
    noExterior: {
        type: String,
        required:true
    },
    noInterior: {
        type: String,
        required:true
    },
    referencia: {
        type: String,
        required:true
    },
    comentarios: {
        type: String,
        required:true
    },
    centroCosto:{
        type: Schema.Types.ObjectId,
        ref: 'centro_costo',
        required: true
    },
    codigoPostal:{
        type: Schema.Types.ObjectId,
        ref: 'codigo_postal',
        required: true
    },
    estado:{
        type: Schema.Types.ObjectId,
        ref: 'estatus',
        required: true
    },
    puntoVenta:{
        type: Schema.Types.ObjectId,
        ref: 'punto_venta',
        required: true
    },
    tipo:{
        type: Schema.Types.ObjectId,
        ref: 'tipos',
        required: true
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'usuario',
        required: true
    }
}, { collection: 'juegos'});


module.exports = model('juegos', JuegoSchema);