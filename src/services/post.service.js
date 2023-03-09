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

module.exports = {
    getAllPosts,
    getByPostId,
};