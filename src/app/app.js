const express = require('express');
const morgan = require('morgan');
const router = require("../routes/user.routes.js");
const cors = require('cors');

const app = express();



app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Permitir solicitudes desde todos los orígenes
app.use(cors());

app.use(function(req, res, next) { // VER BIEN LA EXPLICACIÓN DE ESTOOOOOOOOOOOOOOOOOO
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
   
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  // Configurar opciones CORS para autorizar el encabezado 'Authorization'
app.options('*', cors({
  allowedHeaders: ['Authorization']
}));


app.use("/", router);

// Ruta para servir archivos estáticos desde la carpeta 'uploads'
app.use('/uploads', express.static('uploads'));

app.use("*", (req, res) => { res.status(404).send("Ruta no encontrada")});

module.exports = app;