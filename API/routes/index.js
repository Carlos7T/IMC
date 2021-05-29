const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');


module.exports= function(){
   //Agregar nuevos clientes via POST
   router.post('/NutriNET/Cliente', clienteController.nuevoCliente);

   //Obtener clientes 
   router.get('/NutriNET/Cliente', clienteController.mostrarClientes);

   //Modificar
   router.get('/NutriNET/Cliente/:idCliente', clienteController.mostrarCliente);

   //Actualizar
   router.put('/NutriNET/Cliente/:idCliente', clienteController.actualizarCliente);

   return router
}