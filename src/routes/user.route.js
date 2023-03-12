const express = require('express');
const { userController } = require('../controllers');
const { userValidations, userIdValidation } = require('../middleware/user.middleware');
const { validateToken } = require('../middleware/tokenValidation');

const router = express.Router();

router.post('/', userValidations, userController.insertUser);

router.use(validateToken);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserId);
router.delete('/:id', userIdValidation, userController.deleteByLoginId);

module.exports = router;
