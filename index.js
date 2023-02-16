const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;
const IP = '192.168.20.23';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hola mi server en express');
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);
app.use(cors());

app.listen(port, () => {
  console.log('http://' + IP + ':' + port + '/');
});
