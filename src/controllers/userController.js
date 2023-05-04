const createUserService = require('../services/userServices');
const { created } = require('../utils/status');

const createUser = async (req, res, next) => {
  try {
    const {
      name, telephoneNumber, email, cpf, birthDate, password,
    } = req.body;
    const create = await createUserService(name, telephoneNumber, email, cpf, birthDate, password);
    return res.status(created).json({ user: create });
  } catch (error) {
    return next(error);
  }
};

module.exports = createUser;
