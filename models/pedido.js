
const Usuario = require("./users");
module.exports =(sequelize,type) =>{
    return sequelize.define("pedidos",{
        pedidoId:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        estado: type.STRING,
        hora: type.TIME,
        tipoPago: type.STRING,
        precio:type.INTEGER,
        direccionEnvio:type.STRING,
        usuario:type.STRING
    })
}