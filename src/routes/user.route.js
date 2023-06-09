const express = require('express');
const { userController } = require('../controllers');
const { userValidations, myUserIdValidation, 
    searchUserValidations } = require('../middleware/user.middleware');
const { validateToken } = require('../middleware/tokenValidation');

const router = express.Router();

router.post('/', userValidations, userController.insertUser);

router.use(validateToken);
router.get('/', userController.getUsers);
router.get('/:id', searchUserValidations, userController.getUserId);
router.delete('/:id', myUserIdValidation, userController.deleteByLoginId);

module.exports = router;
