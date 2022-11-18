const express = require('express');
const productsController = require('../controllers/products.controller');
const validateProduct = require('../middlewares/validateProduct');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getProducts);
productsRouter.get('/:id', productsController.getProductsById);
productsRouter.post('/', validateProduct, productsController.insertProduct);

module.exports = productsRouter;
