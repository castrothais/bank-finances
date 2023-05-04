const { Op } = require('sequelize');
const User = require('../models/User');
const userSchemas = require('../schemas/userSchemas');
const errorConstructor = require('../utils/errorConstructor');
const { badRequest, conflict } = require('../utils/status');

const validateUserData = (name, telephoneNumber, email, cpf, birthDate, password) => {
  const { error } = userSchemas.validate({
    name, telephoneNumber, email, cpf, birthDate, password,
  });
  if (error) {
    throw errorConstructor(badRequest, { message: error.message });
  }
};

const checkUserExists = async (telephoneNumber, email, cpf) => {
  const checkCpfEmailTelephone = await User.findOne({
    where: {
      [Op.or]: [
        { telephoneNumber },
        { cpf },
        { email },
      ],
    },
  });

  if (checkCpfEmailTelephone) {
    throw errorConstructor(conflict, { message: 'User already registered' });
  }
};

const createUser = async (name, telephoneNumber, email, cpf, birthDate, password) => {
  const userCreate = await User.create({
    name,
    telephoneNumber,
    email,
    cpf,
    birthDate,
    password,
  });

  return userCreate;
};

const createUserService = async (name, telephoneNumber, email, cpf, birthDate, password) => {
  validateUserData(name, telephoneNumber, email, cpf, birthDate, password);
  await checkUserExists(telephoneNumber, email, cpf);
  const userCreate = await createUser(name, telephoneNumber, email, cpf, birthDate, password);

  return userCreate;
};

module.exports = createUserService;
