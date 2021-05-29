const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');




//Conectar con mongo


const uri= 'mongodb+srv://root:root@cluster0.3y4ud.mongodb.net/Clientes?retryWrites=true&w=majority';
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false ,
    useCreateIndex: true,
    retryWrites: true,

    
}).then(()=>console.log('base de datos conectada'));
mongoose.Promise= global.Promise;
//Crear el servidor
const app= express();

// habilitar el bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas de la app
app.use('/', routes());


//puerto
app.listen(5000);