const jwt = require('jsonwebtoken');
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Token not found' });
      }
    try {
        const decoded = jwt.verify(token, secret);
        const user = await UserService.getByEmail(decoded.data.email);

        if (!user) {
            return res.status(401).json({ message: 'Error looking up token user' });
          }
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: err.message });
      }
    };
