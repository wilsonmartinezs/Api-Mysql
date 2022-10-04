const conexion = require('../database/conexionBd');


const controlador={}



controlador.elimnarProduto=(req,res)=>{

    
            let id_producto= req.params.id;

            let sql=`delete from productos where Pk_id_pdto =${id_producto}`;
            conexion.query(sql,(error,datos)=>{
                if(error) res.send("Error al eliminar el producto en la bd ");
                else{
                    res.send("se elimino el producto con éxito");
                }
            });

        
            
}






controlador.registrarProducto=(req,res)=>{
    const {nombre,descripcion,valor,stock,up}=req.body;

    let sql=`insert into productos(Nombre_Pdto,Descripcion_Pdto,Valor_Pdto,Stock,fk_UP)
            values('${nombre}','${descripcion}','${valor}',${stock},${up})`;

            conexion.query(sql,(error,datos)=>{
                if(error) res.send("Error al insertar el producto en la bd");
                else{
                    res.send("se inserto el producto con éxito");
                }
            });
}


controlador.listarTodosproductos=(req,res)=>{
    let sql=`select * from productos`;

    conexion.query(sql,(error,datos)=>{
            if(error){
                console.log('Error al consultar los prodctos en la bd');
            }else{
                res.json(datos);
            }
    });
}


controlador.buscarProducto=(req,res)=>{
    let codProducto=req.params.idproducto;
    let sql=`select * from productos where Pk_id_pdto=${codProducto}`;
    conexion.query(sql,(error,datos)=>{
            if(error){
                console.log('Error al consultar los prodctos en la bd');
            }else{
                res.json(datos);
            }
    });
}



module.exports =controlador;