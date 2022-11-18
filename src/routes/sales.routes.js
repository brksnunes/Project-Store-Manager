const express = require('express');
const salesController = require('../controllers/sales.controller');

const salesRouter = express.Router();

salesRouter.get('/', salesController.getSales);

module.exports = salesRouter;