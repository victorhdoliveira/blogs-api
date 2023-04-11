const { userService } = require('../services');
const { createToken } = require('../auth/authFunctions');

const insertUser = async (req, res) => {
  try {
      const { displayName, email, password, image } = req.body;

      await userService.createUser({ displayName, email, password, image });
      const token = createToken(email);
      
      res.status(201).json({ token });
  } catch (err) {
      res.status(500).json({
        message: 'Error saving user in database',
        error: err.message,
      });
    }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: 'Error searching users in database',
      error: err.message,
    });
  }
};

const getUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getByUserId(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: 'User does not exist' });
}
};

const deleteByLoginId = async (req, res) => {
  try {
    const { payload: { email: { dataValues: { id } } } } = req.user;
    await userService.destroyByLoginId(id);
    res.status(204).end();
} catch (err) {
    res.status(500).json({ message: 'Error detecting post in database' });
  }
};

module.exports = { 
  insertUser,
  getUsers,
  getUserId, 
  deleteByLoginId,
};