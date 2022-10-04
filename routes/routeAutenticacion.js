
const express = require('express');


const rutaAutenticacion=express.Router();

const controladorAutenticacion=require('../controllers/controllerAutenticacion');

rutaAutenticacion.post('/Validar_Usuario',controladorAutenticacion.Validar_Usuario)


module.exports=rutaAutenticacion;
