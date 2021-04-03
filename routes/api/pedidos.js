const router = require("express").Router();

const {Pedido} = require("../../db")

router.get("/", async(req,res)=>{
    const pedidos =  await Pedido.findAll();
    res.json(pedidos);
});




module.exports = router;