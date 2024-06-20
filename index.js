require('dotenv').config();  //lee los archivos .env el cual contiene las variables de entorno

const express = require('express');
const cors = require('cors') //Configura al servidor para permitir peticiones desde cualquier lugar

const { dbConnection } = require('./database/config');
const usuario = require('./models/usuario');

// Crear el servidor de express
const app = express();

// Configuracion de CORS
app.use(cors());

// Lectura y parseo del Body
app.use( express.json() );

// Lectura del body
app.use( express.json() );

// Base de Datos
dbConnection();


// Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/centro_costo', require('./routes/centro_costo') );
app.use( '/api/codigo_postal', require('./routes/codigoPostal') );
app.use( '/api/estado', require('./routes/estado') );
app.use( '/api/punto_venta', require('./routes/puntoVenta') );
app.use( '/api/tipo', require('./routes/tipo') );
app.use( '/api/juego', require('./routes/juego') );
app.use( '/api/todo', require('./routes/busquedas') );
app.use( '/api/login', require('./routes/auth') );
app.use( '/api/upload', require('./routes/uploads') );

app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
});