
const path = require('path');
const fs = require('fs');

const { response } = require("express");
const { v4: uuidv4 } = require('uuid');
const { actualizarImagen } = require("../helpers/actualizar-imagen");

const fileUpload = ( req, res = response) => {
    const tipo = req.params.tipo;
    const id   = req.params.id;
    const tipoArchivo = req.params.tipoArchivo;

    console.log('rew juego upload', req);
    //Validar tipo
    const tiposValidos = ['juego'];
    if( !tiposValidos.includes(tipo)){
        return res.status(400).json({
            ok: false,
            msg: 'No es un juego (tipo)'
        })
    }

    //Validar que Exista un archivo
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'No selecciono ningun archivo'
        });
    }

    //Procesar la archivo
    const file = req.files.archivo;
    const nombreCortado = file.name.split('.');
    const extencionArchivo = nombreCortado[nombreCortado.length -1];
    let extencionesValidas;

    if ( tipoArchivo === 'img' ) {
        extencionesValidas = ['png','jpg','jpeg','gif'];
    } else if ( tipoArchivo === 'doc' ){
        extencionesValidas = ['pdf'];
    }

    if(!extencionesValidas.includes(extencionArchivo)){
        return res.status(400).json({
            ok: false,
            msg: 'Archivo no valido'
        });
    }

    //Generando el nombre del archivo
    const nombreArchivo = `${ uuidv4() }.${ extencionArchivo }`;

    //Path para guardar la imagen 
    const uploadPath = `./uploads/${ tipo }/${ nombreArchivo }`;

    // Use the mv() method to place the file somewhere on your server
    file.mv(uploadPath, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                ok: false,
                msg: 'Error al cargar la imagen'
            });
        }

        //Actualizar base de datos
        actualizarImagen(tipo, id, nombreArchivo, tipoArchivo);

        res.status(200).json({
            ok: true,
            msg: 'Archivo subido',
            nombreArchivo
        });
    });
}

const retornarImagen = (req, res = response) => {
    const tipo = req.params.tipo;
    const foto = req.params.foto;

    const pathImg = path.join(__dirname, `../uploads/${ tipo }/${ foto }`);

    //Imagen por defecto
    if ( fs.existsSync(pathImg)){
        res.sendFile( pathImg );
    } else {
        const pathImg = path.join(__dirname, `../uploads/no-img.jpg`);
        res.sendFile( pathImg );
    }
    
}

module.exports = {
    fileUpload,
    retornarImagen
}