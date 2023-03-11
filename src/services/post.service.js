const { BlogPost, User, Category, PostCategory } = require('../models');

const createPost = async (title, content, userId) => BlogPost.create({ userId, title, content });

const createPostCategories = async (postCategories) => PostCategory.bulkCreate(postCategories);

const updatePost = async (id, dataUpdated) => BlogPost.update(dataUpdated, { where: { id } });

const destroyByPostId = async (id) => BlogPost.destroy({ where: { id } });

const getAllPosts = () => BlogPost.findAll({
    include: [
        { model: User, 
          attributes: { exclude: 'password' },
          as: 'user',
        },
        { model: Category, 
          through: { attributes: [] },
          as: 'categories',
        },
    ],
});

const getByPostId = (id) => BlogPost.findByPk(id, {
    include: [
        { model: User, 
          attributes: { exclude: 'password' },
          as: 'user',
        },
        { model: Category, 
          through: { attributes: [] },
          as: 'categories',
        },
    ],
});

module.exports = {
    getAllPosts,
    getByPostId,
    updatePost,
    createPost,
    createPostCategories,
    destroyByPostId,
};