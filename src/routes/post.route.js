const express = require('express');
const { postController } = require('../controllers');
const { validateToken } = require('../middleware/tokenValidation');
const { postValidation } = require('../middleware/post.middleware');

const router = express.Router();

router.use(validateToken);
router.get('/', postController.getPosts);
router.get('/:id', postController.getPostId);
router.put('/:id', postValidation, postController.updatePostById);

module.exports = router;