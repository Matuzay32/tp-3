const  Sequelize  = require("sequelize");

const ProductoModel = require("./models/productos");
const path = 'mysql://root@localhost:3306/prueba';





const sequelize = new Sequelize(path,{
    host:"localhost",
    dialect: "mssql"

})

const Producto = ProductoModel(sequelize,Sequelize);
sequelize.sync({force :false})
.then(()=>{
    console.log("tablas sincronizadas");
})
module.exports ={
    Producto
}