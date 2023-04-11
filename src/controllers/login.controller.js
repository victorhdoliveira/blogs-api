const { loginService } = require('../services');
require('dotenv/config');

const loginAuth = async (req, res) => {
try {
    const { email, password } = req.body;
    const token = await loginService.loginAuth(email, password);
    res.status(200).json({ token });
} catch (err) {
    return res.status(500).json({ message: 'Internal Error', error: err.message });
  }
};

module.exports = {
  loginAuth,
 };
