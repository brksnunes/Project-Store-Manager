const Joi = require('joi');

const checkProduct = Joi.object({
  name: Joi.string().min(5).required(),
}).required().messages({
  'any.required': '{#label} is required',
  'string.min': '{#label} length must be at least 5 characters long',
});

const validateProduct = async (req, res, next) => { 
  const { name } = req.body;
  const { error } = checkProduct.validate({ name });
  console.log(error);
  if (error !== undefined && error.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.details[0].message });
  }
  if (error !== undefined && error.details[0].type === 'string.min') {
    return res.status(422).json({ message: error.details[0].message });
  }
  next();
};

module.exports = validateProduct;