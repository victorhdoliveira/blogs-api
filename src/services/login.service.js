const { User } = require('../models');

const getByEmailAndPass = (email, password) => User.findOne({ where: { email, password } });

module.exports = {
    getByEmailAndPass,
};