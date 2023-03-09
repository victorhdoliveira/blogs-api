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

module.exports = { 
    getPosts,
};