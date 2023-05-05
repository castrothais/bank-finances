const User = require('../models/User');
const loginSchemas = require('../schemas/loginSchemas');
const errorConstructor = require('../utils/errorConstructor');
const { badRequest } = require('../utils/status');
const { generateToken } = require('./authServices');

const validateLogin = (email, password) => {
  const { error } = loginSchemas.validate({ email, password });
  if (error) {
    throw errorConstructor(badRequest, { message: error.message });
  }
};

const checkUserExists = async (email) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw errorConstructor(badRequest, 'Invalid Entries');
  }
  return user;
};

const userLogin = async (email, password) => {
  validateLogin(email, password);
  await checkUserExists(email);
  const token = generateToken(email);
  return token;
};

module.exports = userLogin;
