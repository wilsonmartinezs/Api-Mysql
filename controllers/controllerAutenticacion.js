

const conexion = require('../database/conexionBd');

const jwt= require('jsonwebtoken');

controlador={}
controlador.Validar_Usuario=(req,res)=>{
    let {login,password} = req.body;
    let sql=`select pk_identificacion ,Nombre,	Tipo_Usuario  
            from usuarios
            where pk_identificacion=${login} and 	password=${password}`;
    conexion.query(sql,(error,datos)=>{
        if(!error){
            if(datos.length>0){
                let token=jwt.sign({user:datos},process.env.AUTH_SECRET,
                    {expiresIn:process.env.AUTH_EXPRIRES});
                res.status(200).send({user:datos,token});
            }else{
                res.status(401).send( 'usuario no Autorizado'  ); 
                }
        }else{
            res.status(403).send('Error al validar el usuario '+error);
        }
    });
}

controlador.Validar_Token=(req,res,next)=>{
        let token_usuario =req.headers['token'];
        if(!token_usuario) 
        {  return res.status(402).json({autorizado:false,messaje:'EL token es equerido'});}

        const decoded=jwt.verify(token_usuario,process.env.AUTH_SECRET,(error,decoded)=>{
            if(error) 
                return res.status(402).json({autorizado:false,messaje:'El token no es correcto'});
            else next();  
        });
    }

module.exports =controlador;