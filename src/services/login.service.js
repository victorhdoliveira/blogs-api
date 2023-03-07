const { User } = require('../models');

const getByEmailAndPass = async (email, password) => User.findOne({ where: { email, password } });

module.exports = {
    getByEmailAndPass,
};