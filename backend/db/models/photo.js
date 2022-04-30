'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    name: DataTypes.STRING,
    src: DataTypes.TEXT,
    width: DataTypes.DECIMAL,
    height: DataTypes.DECIMAL,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.User, { foreignKey: "userId" });
    const columnMapping = {
      through: 'Fave', 
      otherKey: 'userId',
      foreignKey: 'photoId'
    }
    Photo.belongsToMany(models.User, columnMapping);
  };
  return Photo;
};