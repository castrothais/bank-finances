const userLogin = require('../services/loginServices');
const { success } = require('../utils/status');

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const tokenUser = await userLogin(email, password);
    return res.status(success).json({ token: tokenUser });
  } catch (error) {
    return next(error);
  }
};

module.exports = loginUser;
