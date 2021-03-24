const  Sequelize  = require("sequelize");
const PedidoModel = require("./models/pedido");
const ProductoModel = require("./models/productos");
const UserModel = require("./models/users");
const path = 'mysql://root@localhost:3306/prueba';





const sequelize_ruta = new Sequelize(path,{
    host:"localhost",
    dialect: "mssql"

})

const Producto = ProductoModel(sequelize_ruta,Sequelize);
const User = UserModel(sequelize_ruta,Sequelize);
const Pedido = PedidoModel(sequelize_ruta,Sequelize);

sequelize_ruta.sync({force :false})
.then(()=>{
    console.log("tablas sincronizadas");
})
module.exports ={
    Producto,
    User,
    Pedido
}