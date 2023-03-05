/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

module.exports = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('User', {
    // id: { type: DataTypes.INTEGER, primaryKey: true },
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
  {
    underscored: true,
    timestamps: false,
  },
  );
  return UserModel;
}