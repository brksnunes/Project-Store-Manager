const salesModel = require('../models/sales.model');

const getAll = async () => { 
  const allSales = await salesModel.getAll();
  return { type: null, message: allSales };
};

const getById = async (id) => { 
  const hasSale = await salesModel.getById(id);
  if (!hasSale.length) return { type: 404, message: 'Sale not found' };
  return { type: null, message: hasSale };
};

module.exports = {
  getAll,
  getById,
};