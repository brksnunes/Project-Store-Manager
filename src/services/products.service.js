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

const insertProduct = async (product) => { 
  await productsModel.insertProduct(product);
  const { message: products } = await getAll();
  const id = Number(products[products.length - 1].id);
  const { message } = await getById(id);
  return { type: null, message };
};

const updateProduct = async (id, product) => { 
  const hasProduct = await productsModel.getById(id);
  if (!hasProduct.length) return { type: 404, message: 'Product not found' };
  await productsModel.updateProduct(id, product);
  const updatedProduct = await productsModel.getById(id);
  return { type: null, message: updatedProduct };
};

const deleteProduct = async (id) => { 
  const hasProduct = await productsModel.getById(id);
  if (!hasProduct.length) return { type: 404, message: 'Product not found' };
  await productsModel.deleteProduct(id);
  return { type: null, message: 'success' };
};

module.exports = {
  getAll,
  getById,
  insertProduct,
  updateProduct,
  deleteProduct,
};
