const router = require("express").Router();

const apiProductos = require("./api/productos");
const apiUsers = require("./api/users");


router.use("/productos",apiProductos);
router.use("/users",apiUsers);

module.exports = router;