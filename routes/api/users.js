const router                    = require("express").Router();
const bcrypt                    = require("bcryptjs");
const {User}                    = require("../../db");
const {check, validationResult} =require ("express-validator");
const moment                    = require("moment");
const jwt                       = require("jwt-simple")



router.post("/registrer",async (req,res)=>{

    // req.body.password =  bcrypt.hashSync(req.body.password,10);
     const user =  await User.create(req.body);
     res.json(user);
 
 })
 

 router.post("/login",async (req,res)=>{

     const user =  await User.findOne({where:{email:req.body.email}});
     const password =  await User.findOne({where:{password:req.body.password}});
     const username =  await User.findOne({where:{username:req.body.username}});


     if (username) {
         
    }else{
    res.json({error: " La contraseña o el usuario son incorrectos"});
        
    }
    if (password) {
         res.json({sucess:createToken(user)})
    }else{
    res.json({error: " La contraseña o el usuario son incorrectos"});
        
    }


     if (user) {
         
     }else{
     res.json({error: " La contraseña o el usuario son incorrectos"});
         
     }
 
 })

const createToken = (user) =>{
    const playLoad ={
        usuarioId:user.id,
        createAt:moment().unix(),
        expiredAt:moment().add(30,"minutes").unix()
    }
    return jwt.encode(playLoad,"frase secreta");

}


module.exports = router;