
module.exports =(sequelize,type) =>{
    const Pedidos=  sequelize.define("pedidos",{
        pedidoId:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        estado: {
            type:type.STRING,
            defaultValue:"En proceso"
        },
        
        hora:{
            type: type.DATE,
            defaultValue: type.NOW()

        },
        tipoPago: type.STRING,
        precio:type.INTEGER,
        direccionEnvio:type.STRING,

        
       
    })

    return Pedidos
}