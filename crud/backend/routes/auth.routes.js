const express = require('express');
const controller = require('../controllers/auth.controller');
const authenticateToken = require('../middleware/auth.middleware');
const Router = express.Router();

Router.get('/', controller.test);
Router.post('/register', controller.register)
Router.post('/login',controller.login)
Router.get('/dashboard', authenticateToken, controller.dashboard)
Router.post('/logout', controller.logout)

module.exports = Router;
