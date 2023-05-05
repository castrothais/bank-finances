const express = require('express');
const createUser = require('./controllers/userController');
const loginUser = require('./controllers/loginController');

const routes = express.Router();

routes.get('/', (req, res) => res.json({ hello: 'World!' }));
routes.post('/register', createUser);
routes.post('/login', loginUser);

module.exports = routes;
