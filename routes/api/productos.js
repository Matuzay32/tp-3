const router = require("express").Router();
const middlewares = require("../middlewares");
const {Producto} = require("../../db")

router.get("/", async(req,res)=>{
    const productos =  await Producto.findAll();
    res.json(productos);
});

router.post("/",middlewares.rol,async (req,res)=>{

const producto = await Producto.create(req.body);
res.json(producto);


});

router.put("/:productoId",middlewares.rol,async (req,res)=>{

    await Producto.update(req.body,{
        where:{id: req.params.productoId}
    });
    res.json({succcess: "update correcto"});
    
    
});

router.delete("/:productoId",middlewares.rol,async (req,res)=>{

      await Producto.destroy({
          where:{id: req.params.productoId}
      });
      res.json({succcess: "producto borrado"});
      
      
});
   

    

module.exports = router;