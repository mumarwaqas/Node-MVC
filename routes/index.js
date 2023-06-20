/**
 * @design by Umar Waqas
 */
const express = require('express');
const Route = express.Router();
const IndexController = require('../controllers/IndexController');

Route.get('/index', IndexController.index);

module.exports = Route;

