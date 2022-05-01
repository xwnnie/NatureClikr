'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fave = sequelize.define(
    "Fave",
    {
      faveUserId: { type: DataTypes.INTEGER, allowNull: false },
      photoId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Fave.associate = function(models) {
    // associations can be defined here
      Fave.belongsTo(models.User, { foreignKey: "faveUserId" });
      Fave.belongsTo(models.Photo, { foreignKey: "photoId" });
  };
  return Fave;
};