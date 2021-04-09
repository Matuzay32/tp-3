const router = require("express").Router();

const { compareSync } = require("bcryptjs");
const {Pedido}                  = require("../../db");
const {User}                    = require("../../db");
const {Producto}                = require("../../db");
var obj = {
    userId:1,
    //platoId:1,
    tipoPago:"Credito"
}
//var obj2=JSON.stringify(obj);


router.get("/", async(req,res)=>{
    const pedidos =  await Pedido.findAll({
        attributes: ['pedidoId','estado','hora','tipoPago',"userId","platoId"],
        include:[
            {
            model: User, 
            attributes: ["id",'username',"email","direccion","numero"]
           
          },{
              model: Producto, 
              attributes: ['nombre',"precio","descripcion"]
            }]
        
      });
    
    res.json(pedidos);
});

router.post("/",async (req,res)=>{
  
    //const pedido = await Pedido.create(req.body);
    const pedido = await Pedido.create(obj);

    
    res.json(pedido);
    console.log(res, "esta es mi respuesta");
    
    
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
     

module.exports = router;