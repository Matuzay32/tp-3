const router= require("express").Router();
const bcrypt = require("bcryptjs");
const {User} = require("../../db");
const {check, validationResult} =require("express-validator");




router.post("/registrer",async (req,res)=>{

    // req.body.password =  bcrypt.hashSync(req.body.password,10);
     const user =  await User.create(req.body);
     res.json(user);
 
 })
 

 router.post("/login",async (req,res)=>{

     const user =  await User.findOne({where:{email:req.body.email}});
     if (user) {
         
     }else{
     res.json({error: " La contraseña o el usuario son incorrectos"});
         
     }
 
 })




module.exports = router;