'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    name: DataTypes.STRING,
    src: DataTypes.TEXT,
    width: DataTypes.DECIMAL,
    height: DataTypes.DECIMAL,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    ownerId: DataTypes.INTEGER,
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.User, {as: "photoOwn", foreignKey: "ownerId" });
    Photo.hasMany(models.Fave, { foreignKey: "photoId", onDelete: 'CASCADE' });
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