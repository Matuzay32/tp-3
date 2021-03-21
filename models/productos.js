module.exports =(sequelize,type) =>{
    return sequelize.define("platos",{
        id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre: type.STRING,
        descripcion: type.STRING,
        precio: type.INTEGER,
    })
}