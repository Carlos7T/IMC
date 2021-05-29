const mongoose= require('mongoose');
const Schema = mongoose.Schema;


const clienteSchema= new Schema({
    Cliente_ID :{
        type: Number,
        trim: true
    },
    Nombre_Usuario :{
        type: String,
        trim: true,
        unique:true,
     },
     Constraseña :{
        type: String,
        trim: true
    }, 
     Nombre :{
        type: String,
        trim: true
    },  
    Apellidos :{
        type: String,
        trim: true
    }, 
     Correo_Electronico :{
        type: String,
        trim: true,
        unique:true,
        lowercase:true
    }, 
     Edad :{
        type: Number,
        trim: true
    },  
    Estatura :{
        type: Number,
        trim: true
    }, 
     Peso :{
        type: Number,
        trim: true
    }, 
     IMC :{
        type: Number,
        trim: true
    }, 
     GEB :{
        type: Number,
        trim: true
    }, 
     ETA :{
        type: Number,
        trim: true
    }, 
     Fecha_Creacion :{
        type: Date,
        trim: true
    },
    Fecha_Actualizacion:{
        type: Date,
        trim: true
    },
   
});
module.exports= mongoose.model('Clientes',clienteSchema);