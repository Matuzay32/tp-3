const router                    = require("express").Router();
const  sequelize                = require("sequelize");
const {Pedido}                  = require("../../db");
const {User}                    = require("../../db");
const {Producto}                = require("../../db");
const productos                 = require("../../models/productos");
var carrito                     =[];
const { QueryTypes }            = require('sequelize');
const middlewares               = require("../middlewares");
const jwt      = require("jwt-simple");





//TODO: crear un end point que sea solamente para treaer los pedidos de ese usuario, osea de uno mismo


router.get("/",middlewares.rol, async(req,res)=>{
    const pedidos =  await Pedido.findAll({
        attributes: ['pedidoId','estado','pedidoId','tipoPago'],
        include: [
            {
                model:User,
                attributes: ['id','username','email','direccion','numero']
            },{
                model:Producto,
                attributes: ['id','nombre','descripcion','precio']
            }
          ]
      });
    
    res.json(pedidos);
});

router.get("/misPedidos", middlewares.checkToken, async(req,res,next)=>{
    
    var data = req.body;

    var token = {
        token: data.token,
    }

    const userToken = token.token;
    let playLoad ={};
    playLoad =jwt.decode(userToken,"frase secreta")
   
    




    console.log("ID",playLoad.usuarioId);
    
    const pedidos =  await Pedido.findAll();
    
    res.json(pedidos);
    next();

});





router.post("/carrito",agregaraCarrito);



router.put("/:pedidoId",middlewares.rol,async (req,res)=>{

        await Pedido.update(req.body,{
            where:{pedidoId: req.params.pedidoId}
        });
        res.json({succcess: "update correcto"});

        
});


    router.post("/",async (req,res,)=>{
      console.log(carrito,"estes es mi carrito");
   for (let index = 0; index < carrito.length; index++) {
    var pedido = await Pedido.create(carrito[index]);
       
       
   }
    
    res.json(pedido);
       console.log(res, "esta es mi respuesta");
          
   carrito =[];
       //const pedido = await Pedido.create(obj);
       
}); 
  


router.delete("/:pedidoId",middlewares.rol,async (req,res)=>{

        await Pedido.destroy({
            where:{pedidoId: req.params.pedidoId}
        });
        res.json({succcess: "producto borrado"});
        
        
});


 async function agregaraCarrito(req, res) {
    var data = req.body;

    var pedido = {
        platoId: data.platoId,
        tipoPago: data.tipoPago,
        userId:data.userId
    }
    if (pedido.platoId == "" || pedido.tipoPago == ""||pedido.userId=="") {
        res.status(400).send(`Producto no agregado al carrito!
        Por favor completa todos los datos requeridos.`)
    } else {
        carrito.push(pedido)

        res.status(200).send("agregaste 1 producto")
    }
    console.log("este es mi carrito", carrito)
    return carrito

}



module.exports = router;