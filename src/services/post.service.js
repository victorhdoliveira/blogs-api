const { BlogPost, User, Category } = require('../models');

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

const updatePost = async (id, dataUpdated) => BlogPost.update(dataUpdated, { where: { id } });

module.exports = {
    getAllPosts,
    getByPostId,
    updatePost,
};