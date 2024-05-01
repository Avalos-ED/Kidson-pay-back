require('dotenv').config();  //lee los archivos .env el cual contiene las variables de entorno

const express = require('express');
const cors = require('cors') //Configura al servidor para permitir peticiones desde cualquier lugar

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configuracion de CORS
app.use(cors());

// Lectura del body
app.use( express.json() );

// Base de Datos
dbConnection();

app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
});