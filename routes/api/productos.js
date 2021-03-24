const router = require("express").Router();

const {Producto} = require("../../db")

router.get("/", async(req,res)=>{
    const productos =  await Producto.findAll();
    res.json(productos);
});

router.post("/",async (req,res)=>{

const producto = await Producto.create(req.body);
res.json(producto);


});

router.put("/:productoId",async (req,res)=>{

    await Producto.update(req.body,{
        where:{id: req.params.productoId}
    });
    res.json({succcess: "update correcto"});
    
    
    });

    router.delete("/:productoId",async (req,res)=>{

      await Producto.destroy({
          where:{id: req.params.productoId}
      });
      res.json({succcess: "producto borrado"});
      
      
      });
   

    

module.exports = router;