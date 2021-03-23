const express = require("express");
const cors    = require("cors");
const app     = express();
require("./db");
const apiRoutes = require("./routes/api");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))



    app.use("/api",apiRoutes)



app.listen(3000,()=>{
    console.log("Servidor online");
});
