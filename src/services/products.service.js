const productsModel = require('../models/products.model');

const getAll = async () => { 
  const allProducts = await productsModel.getAll();
  return { type: null, message: allProducts };
};

const getById = async (id) => { 
  const hasProduct = await productsModel.getById(id);
  if (!hasProduct.length) return { type: 404, message: 'Product not found' };
  return { type: null, message: hasProduct };
};

module.exports = {
  getAll,
  getById,
};
