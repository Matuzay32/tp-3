const router = require("express").Router();

const {Pedido}                  = require("../../db");
const {User}                    = require("../../db");
const {Producto}                  = require("../../db");



router.get("/", async(req,res)=>{
    const pedidos =  await Pedido.findAll({
        attributes: ['pedidoId','estado','hora','tipoPago',"userId","platoId"],
        include:[{
            model: User, attributes: ["id",'username',"email","direccion","numero"]
           
          }]
        
      });
    
    res.json(pedidos);
});

router.post("/",async (req,res)=>{

    const pedido = await Pedido.create(req.body);
    res.json(pedido);
    
    
});


router.put("/:pedidoId",async (req,res)=>{

        await Pedido.update(req.body,{
            where:{id: req.params.pedidoId}
        });
        res.json({succcess: "update correcto"});
        
        
});


router.delete("/:pedidoId",async (req,res)=>{

        await Producto.destroy({
            where:{id: req.params.pedidoId}
        });
        res.json({succcess: "producto borrado"});
        
        
});
     

module.exports = router;