/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

 module.exports = (sequelize, DataTypes) => {
  const CategoryModel = sequelize.define('category', {
    name: DataTypes.STRING,
  },
  {
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  },
  );
  return CategoryModel;
}