const   express     = require('express');
const bodyParser    = require('body-parser');
const   app           = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('respuesta por get')
  })

app.listen(port, () => {
    console.log(`Escucha http://localhost:${port}`);
  })
