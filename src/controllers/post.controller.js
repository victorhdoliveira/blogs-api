const { postService } = require('../services');

const getPosts = async (req, res) => {
    try {
        const posts = await postService.getAllPosts();
        if (!posts) throw Error;
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({
          message: 'Error searching post in database',
          error: err.message,
      });
  }
};

const getPostId = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await postService.getByPostId(id);
        if (!post) throw Error;
        res.status(200).json(post);
      } catch (err) {
        res.status(404).json({ message: 'Post does not exist' });
    }
};

const updatePostById = async (req, res) => {
        const { id } = req.params;
        const { title, content } = req.body;

        await postService.updatePost(id, { title, content });
        const uptadedPost = await postService.getByPostId(id);
        res.status(200).json(uptadedPost);
};

module.exports = { 
    getPosts,
    getPostId,
    updatePostById,
};