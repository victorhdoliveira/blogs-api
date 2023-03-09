/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

module.exports = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true  },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
  {
    underscored: true,
    timestamps: false,
  },
  );
  UserModel.associate = (models) => {
    UserModel.hasMany(models.BlogPost, {
      foreignKey: "userId",
      as: "user",
    });
  };
  return UserModel;
}