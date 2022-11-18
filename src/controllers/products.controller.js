const productsService = require('../services/products.service');

const getProducts = async (_req, res) => { 
  const { message } = await productsService.getAll();
  res.status(200).json(message);
};

const getProductsById = async (req, res) => { 
  const { id } = req.params;
  const { type, message } = await productsService.getById(id);
  if (type) return res.status(type).json({ message });
  res.status(200).json(...message);
};

const insertProduct = async (req, res) => { 
  const product = req.body;
  const { message } = await productsService.insertProduct(product);
  res.status(201).json(...message);
};

module.exports = {
  getProducts,
  getProductsById,
  insertProduct,
};
