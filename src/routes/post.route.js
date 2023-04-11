const express = require('express');
const { postController } = require('../controllers');
const { validateToken } = require('../middleware/tokenValidation');
const { postValidation, postDataValidation,
    deleteValidation, postIdValidation } = require('../middleware/post.middleware');

const router = express.Router();

router.use(validateToken);
router.get('/search', postController.searchPosts);
router.get('/', postController.getPosts);
router.get('/:id', postIdValidation, postController.getPostId);
router.put('/:id', postValidation, postController.updatePostById);
router.post('/', postDataValidation, postController.insertPost);
router.delete('/:id', deleteValidation, postController.deletePostById);

module.exports = router;