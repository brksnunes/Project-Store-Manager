const salesService = require('../services/sales.service');

const getSales = async (_req, res) => { 
  const { message } = await salesService.getAll();
  res.status(200).json(message);
};

const getSalesById = async (req, res) => { 
  const { id } = req.params;
  const { type, message } = await salesService.getById(id);
  if (type) return res.status(type).json({ message });
  res.status(200).json(Object.values(message));
};

module.exports = {
  getSales,
  getSalesById,
};