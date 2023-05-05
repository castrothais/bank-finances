const { verifyToken } = require('../services/authServices');
const errorConstructor = require('../utils/errorConstructor');
const { unauthorized } = require('../utils/status');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw errorConstructor(unauthorized, 'Token not found');
    }

    const user = verifyToken(authorization);
    if (!user) {
      throw errorConstructor(unauthorized, 'Expired or invalid token');
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
