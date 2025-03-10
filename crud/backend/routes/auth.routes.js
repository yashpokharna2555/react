const express = require('express');
const controller = require('../controllers/auth.controller');
const Router = express.Router();

Router.get('/', controller.test);
Router.post('/register', controller.register)
Router.post('/login',controller.login)
module.exports = Router;
