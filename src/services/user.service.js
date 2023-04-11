const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) => 
    User.create({ displayName, email, password, image });

const getAllUsers = () => {
  const users = User.findAll({ attributes: { exclude: 'password' } });
  if (!users) throw Error;
  return users;
};

const getByUserId = (id) => {
  const user = User.findByPk(id, { attributes: { exclude: 'password' } });
  if (!user) throw Error;
  return user;
};

const destroyByLoginId = async (id) => {
  const user = User.destroy({ where: { id } });
  if (!user) throw Error;
  return user;
};

  module.exports = {
    createUser,
    getAllUsers,
    getByUserId,
    destroyByLoginId,
  };