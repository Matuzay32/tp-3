const router = require("express").Router();
const middlewares = require("./middlewares");

const apiProductos = require("./api/productos");
const apiUsers = require("./api/users");


router.use("/productos"/* ,middlewares.checkToken */,apiProductos);
router.use("/users",apiUsers);

module.exports = router;