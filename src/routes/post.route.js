const express = require('express');
const { postController } = require('../controllers');
const { validateToken } = require('../middleware/tokenValidation');

const router = express.Router();

router.use(validateToken);
router.get('/', postController.getPosts);

module.exports = router;