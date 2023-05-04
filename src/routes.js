const express = require('express');
const createUser = require('./controllers/userController');

const routes = express.Router();

routes.get('/', (req, res) => res.json({ hello: 'World!' }));
routes.post('/register', createUser);

module.exports = routes;
