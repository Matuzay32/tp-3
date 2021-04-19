
const jwt      = require("jwt-simple")
const moment   = require("moment");

const checkToken = (req,res,next)=>{

    if(!req.headers["user-token"])
    {
        return res.json({error:"Necesitas incluir el user-token en la cabecera"})
    }
const userToken = req.headers["user-token"];
let playLoad ={};
try{
    playLoad =jwt.decode(userToken,"frase secreta")

}catch(err){
    return res.json({error :"El token es incorrecto"});
}


if(playLoad.expiredAt<moment().unix()){
    return res.json({error: "El token a expirado"})
}
req.usuarioId =playLoad.UsuarioId;

    next();
}






const rol = (req,res ,next) =>{

    if(req.body.rol !=1){
        return res.json({error:"necesitas ser administrador"})
    }

    
   

    next();



}






module.exports ={
    checkToken : checkToken,
    rol:rol
}