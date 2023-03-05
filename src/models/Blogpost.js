/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
 module.exports = (sequelize, DataTypes) => {
  const BlogPostModel = sequelize.define(
    'blog_post',
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false,
    },
  );
  BlogPostModel.associate = (models) => {
    BlogPostModel.belongsTo(models.User, {
      foreignKey: 'idUser',
      as: 'user',
    });
  };
  return BlogPostModel;
};
