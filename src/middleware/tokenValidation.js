const { verifyToken } = require('../auth/authFunctions');

const validateToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const payload = verifyToken(authorization);
  req.user = { payload };

    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};
module.exports = { 
  validateToken,
};