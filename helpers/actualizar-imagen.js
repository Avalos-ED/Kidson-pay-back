const fs = require('fs');
const Juego = require('../models/juego');

const borrarImagen = (path, img) => {
    const pathViejo = `${ path }${ img }`;
    if( fs.existsSync( pathViejo )){
        //Borrar la imagen anterior
        fs.unlinkSync(pathViejo);
    }
}

const actualizarImagen = async(tipo, id, nombreArchivo) => {
    switch (tipo) {
        case 'juego':
            const juego = await Juego.findById(id);
            if(!juego){
                console.log('No es un juego');
                return false;
            }

            borrarImagen('./uploads/juego/', juego.imgMontable);
            
            juego.imgMontable = nombreArchivo;
            await juego.save();
            return true;
        break;
        default:
            break;
    }
    console.log('Vamos bien');
}

module.exports = {
    actualizarImagen
}