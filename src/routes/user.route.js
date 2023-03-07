const express = require('express');
const { userController } = require('../controllers');
const { userValidations } = require('../middleware/user.middleware');
const { validateToken } = require('../middleware/tokenValidation');

const router = express.Router();

router.post('/', userValidations, userController.insertUser);
router.get('/', validateToken, userController.getUsers);

module.exports = router;
