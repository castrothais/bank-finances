const express = require('express');
const { error } = require('./middlewares/errorMiddlewares');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);
app.use(error);

app.listen(3000, () => console.log('Iniciando o Projeto'));
