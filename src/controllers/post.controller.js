const { postService } = require('../services');
const { hasCategory, generatePostCategories } = require('../utils/categoryFuncs');

const insertPost = async (req, res) => {
    try {
      const { title, content, categoryIds } = req.body;
      const { payload: { email: { dataValues: { id } } } } = req.user;
      const exists = await hasCategory(categoryIds); 
      if (!exists) return res.status(400).json({ message: 'one or more "categoryIds" not found' });
      const blogPost = await postService.createPost(title, content, id);
      generatePostCategories(blogPost, categoryIds);
      res.status(201).json(blogPost);
    } catch (err) {
      return res.status(500).json({
        message: 'Error inserting post in database',
        error: err.message,
      });
    }
  };

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
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        await postService.updatePost(id, { title, content });
        const uptadedPost = await postService.getByPostId(id);
        if (!uptadedPost) throw Error;
        res.status(200).json(uptadedPost);
    } catch (err) {
        res.status(500).json({ message: 'Error updating post in database' });
    }
};

const deletePostById = async (req, res) => {
    try {
        const { id } = req.params;
        const del = await postService.destroyByPostId(id);
        if (!del) throw Error;
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ message: 'Error detecting post in database' });
    }
};

const searchPosts = async (req, res) => {
    try {
    const { q } = req.query;
    const searchTerm = q.toLowerCase();
    const postsWithSearch = await postService.getSearchPosts(searchTerm);
    if (!postsWithSearch) throw Error;
    res.status(200).json(postsWithSearch);
  } catch (err) {
    return res.status(500).json({ message: 'Error searching title or content in database' });
  }
};

module.exports = { 
    getPosts,
    getPostId,
    updatePostById,
    insertPost,
    deletePostById,
    searchPosts,
};