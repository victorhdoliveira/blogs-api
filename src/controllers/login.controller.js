const { loginService } = require('../services');
const { createToken } = require('../auth/authFunctions');
require('dotenv/config');

const isBodyValid = (email, password) => email && password;

const loginAuth = async (req, res) => {
try {
    const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const user = await loginService.getByEmailAndPass(email, password);
    if (!user) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    const { password: _, ...userWithoutPassword } = user;
    const token = createToken(userWithoutPassword);

    res.status(200).json({ token });
} catch (err) {
    return res.status(500).json({ message: 'Internal Error', error: err.message });
  }
};

module.exports = {
  loginAuth,
 };
