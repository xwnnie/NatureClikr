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
      "Photos",
      [
        {
          name: "Green Succulent Plants On Pots",
          width: 2748,
          height: 2112,
          src: "https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg",
          location: "AZ",
          description: "beautiful",
          userId: 1,
        },
        {
          name: "Green Succulent Plants",
          width: 2448,
          height: 3264,
          src: "https://images.pexels.com/photos/1207978/pexels-photo-1207978.jpeg",
          location: "AZ",
          description: "beautiful",
          userId: 2,
        },
        {
          name: "Green Succulent Plant",
          width: 5264,
          height: 3510,
          src: "https://images.pexels.com/photos/1284879/pexels-photo-1284879.jpeg",
          location: "AZ",
          description: "beautiful",
          userId: 2,
        },
        {
          name: "Black Hanging Bridge Surrounded by Green Forest Trees",
          width: 1999,
          height: 2998,
          src: "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg",
          location: "AZ",
          description: "beautiful",
          userId: 1,
        },
        {
          name: "Trees on a Dark Forest ",
          width: 3312,
          height: 4416,
          src: "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg",
          location: "AZ",
          description: "beautiful",
          userId: 3,
        },
        {
          name: "Green Leafed Tree",
          width: 5760,
          height: 3840,
          src: "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg",
          location: "AZ",
          description: "beautiful",
          userId: 1,
        },
        {
          name: "Close Up Photo of Blue Discus Fish",
          width: 5760,
          height: 3840,
          src: "https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 3,
        },
        {
          name: "Clownfish near Coral Reef",
          width: 4608,
          height: 3456,
          src: "https://images.pexels.com/photos/1125979/pexels-photo-1125979.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 1,
        },
        {
          name: "White and Grey Kitten on Brown and Black Leopard Print Textile",
          width: 2392,
          height: 2500,
          src: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 2,
        },
        {
          name: "Close-up Portrait of Lion",
          width: 1920,
          height: 1491,
          src: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 4,
        },
        {
          name: "Brown Squirrel",
          width: 2939,
          height: 2583,
          src: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 2,
        },
        {
          name: "Body of Water during Golden Hour",
          width: 5760,
          height: 3840,
          src: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 1,
        },
        {
          name: "Landscape Photograph of Body of Water",
          width: 3888,
          height: 2592,
          src: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 4,
        },
        {
          name: "Photo of a Turtle Swimming Underwater",
          width: 4000,
          height: 3000,
          src: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 4,
        },
        {
          name: "Gray and Brown Mountain",
          width: 4872,
          height: 3248,
          src: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 2,
        },
        {
          name: "Landscape Photography of Mountains Covered in Snow",
          width: 5472,
          height: 3648,
          src: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 3,
        },
        {
          name: "Snow-top Mountain Under Clear Sky",
          width: 6000,
          height: 4000,
          src: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 2,
        },
        {
          name: "Photo of Daisy Flowers",
          width: 3707,
          height: 2734,
          src: "https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 1,
        },
        {
          name: "White Petaled Flowers",
          width: 4016,
          height: 6016,
          src: "https://images.pexels.com/photos/2512280/pexels-photo-2512280.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 4,
        },
        {
          name: "Photo of Leaves",
          width: 3000,
          height: 2000,
          src: "https://images.pexels.com/photos/1382393/pexels-photo-1382393.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 3,
        },
        {
          name: "Person Holding A Green Plant",
          width: 5184,
          height: 3456,
          src: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 4,
        },
        {
          name: "Closeup Photo of Sprout",
          width: 6000,
          height: 4000,
          src: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 1,
        },
        {
          name: "Person's Left Hand Holding Green Leaf Plant",
          width: 4110,
          height: 2642,
          src: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg",
          location: "CA",
          description: "beautiful",
          userId: 2,
        },
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
    return queryInterface.bulkDelete("Photos", null, {});
  }
};
