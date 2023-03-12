const { loginService, userService } = require('../services');

const userValidations = async (req, res, next) => {
    const { displayName, email, password } = req.body;
    const regex = /\S+@\S+\.\S+/;
    const verifyLogin = await loginService.getByEmailAndPass(email, password);

    if (displayName.length < 8) {
      return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    if (!regex.test(email)) {
       return res.status(400).json({ message: '"email" must be a valid email' });
    }
    if (password.length < 6) {
        return res.status(400)
          .json({ message: '"password" length must be at least 6 characters long' });
      }
    if (verifyLogin) {
      return res.status(409).json({ message: 'User already registered' });
    }
    return next();
  };

const userIdValidation = async (req, res, next) => {
  const { payload: { email: { dataValues: { id } } } } = req.user;
  const user = await userService.getByUserId(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not match' });
  }
  return next();
};

  module.exports = {
    userValidations,
    userIdValidation,
  };