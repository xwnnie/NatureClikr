'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fave = sequelize.define('Fave', {
    faveUserId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER
  }, {});
  Fave.associate = function(models) {
    // associations can be defined here
      Fave.belongsTo(models.User, { foreignKey: "faveUserId" });
      Fave.belongsTo(models.Photo, { foreignKey: "photoId" });
  };
  return Fave;
};