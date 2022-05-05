'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Faves",
      [
        {
          photoId: 1,
          faveUserId: 2
        },
        {
          photoId: 2,
          faveUserId: 1
        },
        {
          photoId: 2,
          faveUserId: 3
        },
        {
          photoId: 3,
          faveUserId: 1
        },
        {
          photoId: 4,
          faveUserId: 4
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete("Faves", null, {});
  }
};
