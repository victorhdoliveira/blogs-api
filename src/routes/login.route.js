const express = require('express');
const { loginController } = require('../controllers');
const validateJWT = require('../auth/authFunctions');

const router = express.Router();

router.post('/', validateJWT, loginController.loginAuth);

module.exports = router;
