const { postService } = require('../services');

const postValidation = async (req, res, next) => {
    const { title, content } = req.body;
    const { payload: { email: { dataValues } } } = req.user;
    const { id } = req.params;
    const post = await postService.getByPostId(id);
    const { user } = post;

    if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

    if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  } 
  
    if (user.id !== dataValues.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
};

module.exports = {
   postValidation,
};
