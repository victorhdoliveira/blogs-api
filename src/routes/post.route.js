const express = require('express');
const { postController } = require('../controllers');
const { validateToken } = require('../middleware/tokenValidation');
const { postValidation, bodyDataValidation,
    deleteValidation } = require('../middleware/post.middleware');

const router = express.Router();

router.use(validateToken);
router.get('/', postController.getPosts);
router.get('/:id', postController.getPostId);
router.put('/:id', postValidation, postController.updatePostById);
router.post('/', bodyDataValidation, postController.insertPost);
router.delete('/:id', deleteValidation, postController.deletePostById);

module.exports = router;