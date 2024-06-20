const { response } = require('express');
const bcrypt = require('bcryptjs'); //exportacion por defecto
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');

const getUsuarios = async (req, res) => {

    const usuarios = await Usuario.find({}, 'nombre email role google');
    res.status(200).json({
        ok: true,
        usuarios
    });
}

const crearUsuarios = async (req, res = response) => {

    const { email, password} = req.body;

    try {
        const existeEmail = await Usuario.findOne({ email });

        if( existeEmail ) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya se encuentra esta registrado'
            })
        }

        const usuario = new Usuario(req.body);
        // Encriptar contraseña
        const salt = bcrypt.genSaltSync(); //Data generada de manera aleatoria para incriptar la contraseña
        usuario.password = bcrypt.hashSync(password, salt);

        //Guardar Usuario
        await usuario.save();

        // Generar el TOKEN - JWT
        const token = await generarJWT(usuario.id);

        res.status(200).json({
            ok: true,
            usuario,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Error inesperado... revisar logs'
        })
    }
}

const actualizarUsuario = async (req, res = response) => {
    // TODO: validar token y comprobar si es el usuario correcto

    const uid = req.params.id;
    try {

        const usuarioDB = await Usuario.findById(uid);
        if(!usuarioDB){
            res.status(404).json({
                ok: false,
                msg: 'Usuario no existe'
            });
        }

        const { password, google, email, ...campos} = req.body;

        if(usuarioDB.email !== email){
            const existeEmail = await Usuario.findOne({ email });
            if( existeEmail ) {
                return res.status(400).json({
                    ok: false,
                    msg: 'El existe un suaurio con ese email'
                })
            }
        }

        campos.email = email;
        const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos, { new: true });
        usuarioActualizado.save();

        res.status(200).json({
            ok: true,
            usuario: usuarioActualizado
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }
}


const borrarUsuario = async(req, res = response) => {

    const uid = req.params.id;
    try {
        const usuarioDB = await Usuario.findById(uid);
        if(!usuarioDB){
            res.status(404).json({
                ok: false,
                msg: 'Usuario no existe'
            });
        }

        await Usuario.findByIdAndDelete(uid);

        res.status(200).json({
            ok:true,
            usuario
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Error inesperado'
        });
    }
}

module.exports = {
    getUsuarios,
    crearUsuarios,
    actualizarUsuario,
    borrarUsuario,
}