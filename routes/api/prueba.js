app.post('/pedidos/carrito', validarUsuario, agregaraCarrito) //Ver todos los pedidos realizados
app.post('/pedidos/enviar', validarUsuario, enviarPedido) // Registra pedido en la base


//Queries pedidos
var carrito = []

function verPedidos(req, res) {
    console.log(req.usuario)
    if (req.usuario.rol === 'admin') {
        sequelize.query(`SELECT pedidos.id, pedidos.fechaCreado,pedidos.fechaActualizado,pedidos.estado,
        pedidos.idProducto,  productos.nombre,pedidos.cantidad,pedidos.formadePago,pedidos.usuario,
        pedidos.direccion_de_envio FROM pedidos 
        LEFT JOIN productos
        ON pedidos.idProducto = productos.codigo_interno`,
            { type: sequelize.QueryTypes.SELECT })
            .then(function (pedidos) {
                res.status(200).send(pedidos)
            }).catch(function () {
                res.status(400).send("No hay pedidos")
            })
    } else {
        sequelize.query('SELECT * FROM pedidos WHERE usuario = ?',
            { replacements: [req.usuario.usuario], type: sequelize.QueryTypes.SELECT })
            .then(function (pedidos) {
                console.log(pedidos)
                if (pedidos) {
                    res.status(200).send(pedidos)
                } else {
                    res.status(400).send("No has realizado pedidos hasta el momento")
                }
            })
    }

}

function agregaraCarrito(req, res) {
    var data = req.body;

    var pedido = {
        platoId: data.platoId,
        tipoPago: data.tipoPago,
        userId:data.userId
    }
    if (pedido.platoId == "" || pedido.tipoPago == "") {
        res.status(400).send(`no se pudo agregar el producto.`)
    } else {
        carrito.push(pedido)

        res.status(200).send(`Agregaste un producto`)
    }

    return carrito

}

function enviarPedido(req, res) {

    for (let index = 0; index < carrito.length; index++) {
        sequelize.query('INSERT INTO pedidos (platoId,            tipoPago,   usuario) VALUES (?,?,?)',
            { replacements: [carrito[index].platoId, carrito[index].tipoPago, carrito[index].userId] })
    }
    carrito = []
    res.status(200).send('Se registró su pedido con éxito!')
}