const jwt = require('jsonwebtoken');
const { loginService } = require('../services');
require('dotenv/config');

const isBodyValid = (email, password) => email && password;
const secret = process.env.JWT_SECRET;
const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const loginAuth = async (req, res) => {
try {
    const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const user = await loginService.getByEmailAndPass(email, password);
    if (!user || user.password !== password) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = jwt.sign({ data: { email: user.email } }, secret, jwtConfig);
    res.status(200).json({ token });
} catch (err) {
    return res.status(500).json({ message: 'Internal Error', error: err.message });
  }
};

module.exports = {
  loginAuth,
 };
