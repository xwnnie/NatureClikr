"use strict";
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define(
    "Photo",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      url: { type: DataTypes.TEXT, allowNull: false },
      location: DataTypes.STRING,
      description: DataTypes.TEXT,
      ownerId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Photo.associate = function (models) {
    // associations can be defined here
    Photo.belongsTo(models.User, { foreignKey: "ownerId" });
    Photo.hasMany(models.Fave, {
      foreignKey: "photoId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Photo.hasMany(models.Comment, {
      foreignKey: "photoId",
      onDelete: "CASCADE",
      hooks: true,
    });
    // const columnMapping = {
    //   as: "photofaves",
    //   through: "Fave",
    //   otherKey: "faveUserId",
    //   foreignKey: "photoId",
    // };
    // Photo.belongsToMany(models.User, columnMapping);
  };
  return Photo;
};
