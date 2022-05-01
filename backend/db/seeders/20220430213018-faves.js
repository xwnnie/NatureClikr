'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Faves", null, {});
  }
};
