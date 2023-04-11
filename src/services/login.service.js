const { User } = require('../models');
const { createToken } = require('../auth/authFunctions');

const getByEmailAndPass = async (email, password) => User.findOne({ where: { email, password } });

const loginAuth = async (email, password) => {
    const user = await getByEmailAndPass(email, password);
    const { password: _, ...userWithoutPassword } = user;
    const token = createToken(userWithoutPassword);
    return token;
};

module.exports = {
    getByEmailAndPass,
    loginAuth,
};