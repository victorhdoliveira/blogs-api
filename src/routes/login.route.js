const express = require('express');
const { loginController } = require('../controllers');
const { loginValidation } = require('../middleware/login.middleware');

const router = express.Router();

router.post('/', loginValidation, loginController.loginAuth);

module.exports = router;
