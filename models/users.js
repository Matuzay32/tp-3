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

    })


    return Users;
}
