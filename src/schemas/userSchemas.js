const Joi = require('joi');
const moment = require('moment');

const userSchemas = Joi.object({
  name: Joi.string().min(10).max(50).required(),
  telephoneNumber: Joi.string().pattern(/^(\(\d{2}\)\d{5}-\d{4}|\d{2}\d{5}-\d{4})$/).required(),
  email: Joi.string().email().required(),
  cpf: Joi.string().pattern(/^\d{11}$/).required(),
  birthDate: Joi.date().iso().required().max(moment().subtract(18, 'years')),
  password: Joi.string().min(7).max(20).required(),
});

module.exports = userSchemas;
