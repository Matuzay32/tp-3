
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





// Este middleware checkea si eres administrador, 0 significa que no, 1 que si;
const rol = (req,res ,next) =>{

    if(req.body.rol !=1){
        return res.json({error:"necesitas ser administrador"})
    }

    
   

    next();



}

//Este middleWare chekea si eres un Usuario // esta especialemente creado para el Chekequeo de la ruta mis pedidos
const rolMisPedidos = (req,res ,next) =>{

    if(req.body.rol !=0){
        return res.json({error:"Solamente los usuarios pueden hacer uso de esta funcion, debe enviar un rol valido y su token  en los headers"})
    }

    
   

    next();



}





module.exports ={
    checkToken : checkToken,
    rol:rol,
    rolMisPedidos:rolMisPedidos
}