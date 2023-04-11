const { loginService } = require('../services');

const loginValidation = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await loginService.getByEmailAndPass(email, password);

    if (!email || !password) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    return next();
};

module.exports = {
    loginValidation,
 };