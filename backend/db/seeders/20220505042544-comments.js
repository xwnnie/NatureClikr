'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          photoId: 1,
          userId: 2,
          content: "Love the colors!",
        },
        {
          photoId: 2,
          userId: 3,
          content: "So adorable",
        },
        {
          photoId: 3,
          userId: 1,
          content: "I like succulent so much",
        },
        {
          photoId: 4,
          userId: 3,
          content: "Great photo",
        },
        {
          photoId: 5,
          userId: 2,
          content: "Where is this forest?",
        },
        {
          photoId: 6,
          userId: 2,
          content: "Gorgeous",
        },
        {
          photoId: 7,
          userId: 1,
          content: "Cute fish!",
        },
        {
          photoId: 8,
          userId: 4,
          content: "I love clownfish",
        },
        {
          photoId: 9,
          userId: 4,
          content: "OMG, so cute",
        },
        {
          photoId: 10,
          userId: 1,
          content: "This is a great photo",
        },
        {
          photoId: 11,
          userId: 3,
          content: "Saved to my fave!",
        },
        {
          photoId: 12,
          userId: 2,
          content: "Found my peace",
        },
        {
          photoId: 13,
          userId: 2,
          content: "Amazing!",
        },
        {
          photoId: 14,
          userId: 3,
          content: "Very calming",
        },
        {
          photoId: 15,
          userId: 3,
          content: "Great photo",
        },
        {
          photoId: 16,
          userId: 2,
          content: "Liked!",
        },
        {
          photoId: 17,
          userId: 3,
          content: "Amazing photo",
        },
        {
          photoId: 18,
          userId: 2,
          content: "Love the colors!",
        },
        {
          photoId: 19,
          userId: 1,
          content: "I need these flowers",
        },
        {
          photoId: 20,
          userId: 2,
          content: "How to take photos like that?",
        },
        {
          photoId: 21,
          userId: 1,
          content: "Wish I can be there one day",
        },
        {
          photoId: 22,
          userId: 4,
          content: "Amazing",
        },
        {
          photoId: 23,
          userId: 3,
          content: "That's an interesting photo",
        },
        {
          photoId: 24,
          userId: 1,
          content: "Love this photo",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete("Comments", null, {});
  }
};
