const express = require('express');
const controller = require('../controllers/auth.controller');
const Router = express.Router();

Router.get('/', controller.test);
Router.post('/register', controller.register)
module.exports = Router;
