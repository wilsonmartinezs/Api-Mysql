
const express = require('express');
const token= require('../controllers/controllerAutenticacion');


const rutaProducto=express.Router();

const controladorProducto=require('../controllers/controllerProducto');

rutaProducto.get('/listarTodosproductos',token.Validar_Token,
controladorProducto.listarTodosproductos);


rutaProducto.get('/buscarProducto/:idproducto',controladorProducto.buscarProducto);
rutaProducto.post('/registrarProducto',token.Validar_Token,controladorProducto.registrarProducto);

rutaProducto.get('/elimnarProduto/:id',controladorProducto.elimnarProduto);



module.exports=rutaProducto;
