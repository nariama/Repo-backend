const express = require('express');
const morgan = require('morgan');
const router = require("../routes/user.routes.js");


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/api/v1", router);

app.use("*", (req, res) => { res.status(404).send("Ruta no encontrada")});

module.exports = app;