module.exports =(sequelize,type) =>{
    const Users = sequelize.define("users",{
        id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        username: type.STRING,
        email: type.STRING,
        password: type.STRING,
        direccion: type.STRING,
        numero:type.STRING,
        //Si es 0 el Usuario es normal si es 1 es una Admin
        rol:{
            type:type.INTEGER,
            defaultValue:0
        }

    })


    return Users;
}
