/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

 module.exports = (sequelize, DataTypes) => {
  const BlogPostModel = sequelize.define(
    'BlogPost',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true  },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'blog_posts',
    },
  );
  BlogPostModel.associate = (models) => {
    BlogPostModel.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };
  return BlogPostModel;
};