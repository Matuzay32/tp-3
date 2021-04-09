const router = require("express").Router();
const middlewares = require("./middlewares");

const apiProductos = require("./api/productos");
const apiPedidos = require("./api/pedidos");
const apiUsers = require("./api/users");


router.use("/productos" /* ,middlewares.checkToken  */,apiProductos);
router.use("/pedidos",apiPedidos);

router.use("/users",apiUsers);

module.exports = router;