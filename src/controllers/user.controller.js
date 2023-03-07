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
    if (!users) throw Error;
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: 'Error searching users in database',
      error: err.message,
    });
  }
};

module.exports = { insertUser, getUsers };