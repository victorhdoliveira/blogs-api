/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 */
 module.exports = (sequelize, DataTypes) => {
  const PostCategoriesModel = sequelize.define(
    'PostCategory',
    { 
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    },
  );
  PostCategoriesModel.associate = ({ Category, BlogPost }) => {
    BlogPost.belongsToMany(Category, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategoriesModel,
      as: 'categories',
    });
    Category.belongsToMany(BlogPost, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategoriesModel,
      as: 'postId',
    });
  };
  return PostCategoriesModel;
};