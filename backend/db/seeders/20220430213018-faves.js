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
          userId: 2
        },
        {
          photoId: 2,
          userId: 1
        },
        {
          photoId: 2,
          userId: 3
        },
        {
          photoId: 3,
          userId: 1
        },
        {
          photoId: 4,
          userId: 4
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
