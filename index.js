const express = require("express");
const app     = express();
require("./db");
const apiRoutes = require("./routes/api");


app.use(express.json());
app.use(express.urlencoded({extended:true}))



    app.use("/api",apiRoutes)



app.listen(3000,()=>{
    console.log("Servidor online");
});
