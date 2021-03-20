const router = require("express").Router();

const apiProductos = require("./api/productos");

router.use("/productos",apiProductos);

module.exports = router;