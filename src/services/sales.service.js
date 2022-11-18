const salesModel = require('../models/sales.model');

const getAll = async () => { 
  const allSales = await salesModel.getAll();
  return { type: null, message: allSales };
};

module.exports = {
  getAll,
};