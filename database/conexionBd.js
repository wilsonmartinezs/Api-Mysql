const mysql = require('mysql');

const conexion =mysql.createConnection(
        {
        host:process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD ,
        database:process.env.DB_DATABASE
        }
    );
conexion.connect((error)=>{
    if(error){
        console.log("Error al conectarse con la base de datos "+ error); 
    }else{
        console.log("Conexion con éxito a la base de datos ");
    }
});
module.exports =conexion;