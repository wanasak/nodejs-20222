const express = require('express');
const authRoutes = express.Router();
const authController = require('../controllers/AuthController');

authRoutes.route('/signup').post(authController.signup);
authRoutes.route('/login').post(authController.login);

module.exports = authRoutes;
