const router = require("express").Router();

const {Pedido}                  = require("../../db");
const {User}                    = require("../../db");
const {Producto}                = require("../../db");
const productos = require("../../models/productos");
var carrito = [];

/* var obj = {
    platoId: "1",
    tipoPago: "aaa",
    userId:"1"
}
var obj2 = {
    platoId: "2",
    tipoPago: "fff",
    userId:"2"
}
carrito.push(obj,obj2);
 */
router.get("/", async(req,res)=>{
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

 router.post("/",async (req,res)=>{
   carrito.push(req.body);
    for (let index = 0; index < carrito.length; index++) {
     
        const pedido = await Pedido.create(carrito[index]);
         res.json(pedido);
        console.log(res, "esta es mi respuesta");
    }
    carrito = []
    
    //const pedido = await Pedido.create(obj);
    
}); 

 
 

router.put("/:pedidoId",async (req,res)=>{

        await Pedido.update(req.body,{
            where:{pedidoId: req.params.pedidoId}
        });
        res.json({succcess: "update correcto"});

        
});


router.delete("/:pedidoId",async (req,res)=>{

        await Pedido.destroy({
            where:{pedidoId: req.params.pedidoId}
        });
        res.json({succcess: "producto borrado"});
        
        
});
    




function agregaraCarrito(req, res) {
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

        res.status(200).send(`Agregaste el producto al carrito`)
    }

    return carrito

}

module.exports = router;