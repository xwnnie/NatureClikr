"use strict";
const { Validator } = require("sequelize");
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
          len: [3, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          },
        },
      },
      displayName: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      location: {
        type: DataTypes.STRING(100),
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
      },
    }
  );

  User.associate = function (models) {
    User.hasMany(models.Photo, {
      foreignKey: "ownerId",
      onDelete: "CASCADE",
      hooks: true,
    });
    User.hasMany(models.Fave, {
      foreignKey: "faveUserId",
      onDelete: "CASCADE",
      hooks: true
    });
    User.hasMany(models.Comment, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      hooks: true,
    });
    // const columnMapping = {
    //     as: 'userfaves',
    //     through: 'Fave', 
    //     otherKey: 'photoId',
    //     foreignKey: 'faveUserId'
    // }
    // User.belongsToMany(models.Photo, columnMapping);
  };

  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, username, displayName, location, email, createdAt } = this; // context will be the User instance
    return { id, username, displayName, location, email, createdAt };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope("currentUser").findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require("sequelize");
    const user = await User.scope("loginUser").findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope("currentUser").findByPk(user.id);
    }
  };

  User.signup = async function ({ username, email, displayName, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      displayName,
      email,
      hashedPassword,
    });
    return await User.scope("currentUser").findByPk(user.id);
  };

  return User;
};
