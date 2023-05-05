const Joi = require('joi');

const loginSchemas = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).max(20).required(),
});

module.exports = loginSchemas;
