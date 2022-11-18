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

const updateProduct = async (req, res) => { 
  const product = req.body;
  const { id } = req.params;
  const { type, message } = await productsService.updateProduct(id, product);
  if (type) return res.status(type).json({ message });

  res.status(200).json(...message);
};

const deleteProduct = async (req, res) => { 
  const { id } = req.params;
  const { type, message } = await productsService.deleteProduct(id);
  if (type) return res.status(type).json({ message });
  res.sendStatus(204);
};

module.exports = {
  getProducts,
  getProductsById,
  insertProduct,
  updateProduct,
  deleteProduct,
};
