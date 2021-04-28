const router = require("express").Router();
const middlewares = require("../middlewares");
const {Producto} = require("../../db")

router.get("/", async(req,res)=>{
    const productos =  await Producto.findAll();
    res.json(productos);

});

//Tanto los administradores como usuarios pueden ver todos los productos
router.post("/",middlewares.rol,async (req,res)=>{

const producto = await Producto.create(req.body);
res.json(producto);

});
// Solamente un Usuario con rol de Administrador puede modificar un pedido Administrador = 1 Usuario =0
router.put("/:productoId",middlewares.rol,async (req,res)=>{

    await Producto.update(req.body,{
        where:{id: req.params.productoId}
    });
    res.json({succcess: "update correcto"});
    
    
});

//Solamente los administradores pueden borrar Productos Administrador = 1 Usuario =0
router.delete("/:productoId",middlewares.rol,async (req,res)=>{

      await Producto.destroy({
          where:{id: req.params.productoId}
      });
      res.json({succcess: "producto borrado"});
      
      
});
   

    

module.exports = router;