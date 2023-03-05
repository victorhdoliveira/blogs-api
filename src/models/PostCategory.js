/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 */
 module.exports = (sequelize, DataTypes) => {
  const PostCategoriesModel = sequelize.define(
    'posts_categories',
    {},
    {
      timestamps: false,
      tableName: 'post_categories',
      underscored: true,
    },
  );
  PostCategoriesModel.associate = ({ Category, BlogPost }) => {
    BlogPost.belongsToMany(Category, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategoriesModel,
      as: 'blogPosts',
    });
    Category.belongsToMany(BlogPost, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategoriesModel,
      as: 'categories',
    });
  };
  return CourseModule;
};
