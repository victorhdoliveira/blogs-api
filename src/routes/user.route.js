const express = require('express');
const { userController } = require('../controllers');
const { userValidations } = require('../middleware/user.middleware');

const router = express.Router();

router.post('/', userValidations, userController.insertUser);

module.exports = router;
