const { Model } = require("sequelize");
const { commonFields, commonOptions } = require("./common");

module.exports = function (sequelize, DataTypes) {
  class User extends Model {}
  User.init(
    {
      ...commonFields,
      first_name: {
        type: DataTypes.STRING({ length: 256 }),
        allowNull: false,
        unique: true,
      },
      last_name: {
        type: DataTypes.STRING({ length: 256 }),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING({ length: 256 }),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    { ...commonOptions, sequelize }
  );

  return User;
};
