const salesService = require('../services/sales.service');

const getSales = async (_req, res) => { 
  const { message } = await salesService.getAll();
  res.status(200).json(message);
};

module.exports = {
  getSales,
};