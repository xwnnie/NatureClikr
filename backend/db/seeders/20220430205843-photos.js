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
          url: "https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg",
          location: "AZ",
          description: "beautiful",
          ownerId: 1,
          createdAt: "2022-04-12",
          updatedAt: "2022-04-12",
        },
        {
          name: "Green Succulent Plants",
          url: "https://images.pexels.com/photos/1207978/pexels-photo-1207978.jpeg",
          location: "AZ",
          description: "beautiful",
          ownerId: 2,
          createdAt: "2022-01-12",
          updatedAt: "2022-01-12",
        },
        {
          name: "Green Succulent Plant",
          url: "https://images.pexels.com/photos/1284879/pexels-photo-1284879.jpeg",
          location: "AZ",
          description: "beautiful",
          ownerId: 2,
          createdAt: "2022-03-12",
          updatedAt: "2022-03-12",
        },
        {
          name: "Black Hanging Bridge Surrounded by Green Forest Trees",
          url: "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg",
          location: "AZ",
          description: "beautiful",
          ownerId: 1,
          createdAt: "2022-03-15",
          updatedAt: "2022-03-15",
        },
        {
          name: "Trees on a Dark Forest ",
          url: "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg",
          location: "AZ",
          description: "beautiful",
          ownerId: 3,
          createdAt: "2022-04-01",
          updatedAt: "2022-04-01",
        },
        {
          name: "Green Leafed Tree",
          url: "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg",
          location: "AZ",
          description: "beautiful",
          ownerId: 1,
          createdAt: "2022-01-12",
          updatedAt: "2022-01-12",
        },
        {
          name: "Close Up Photo of Blue Discus Fish",
          url: "https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 3,
          createdAt: "2022-02-19",
          updatedAt: "2022-02-19",
        },
        {
          name: "Clownfish near Coral Reef",
          url: "https://images.pexels.com/photos/1125979/pexels-photo-1125979.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 1,
          createdAt: "2022-03-15",
          updatedAt: "2022-03-15",
        },
        {
          name: "White and Grey Kitten on Brown and Black Leopard Print Textile",
          url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 2,
          createdAt: "2022-04-14",
          updatedAt: "2022-04-14",
        },
        {
          name: "Close-up Portrait of Lion",
          url: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 4,
          createdAt: "2022-04-20",
          updatedAt: "2022-04-20",
        },
        {
          name: "Brown Squirrel",
          url: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 2,
          createdAt: "2022-04-30",
          updatedAt: "2022-04-30",
        },
        {
          name: "Body of Water during Golden Hour",
          url: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 1,
          createdAt: "2022-02-20",
          updatedAt: "2022-02-20",
        },
        {
          name: "Landscape Photograph of Body of Water",
          url: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 4,
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11",
        },
        {
          name: "Photo of a Turtle Swimming Underwater",
          url: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 4,
          createdAt: "2022-04-02",
          updatedAt: "2022-04-02",
        },
        {
          name: "Gray and Brown Mountain",
          url: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 2,
          createdAt: "2022-03-22",
          updatedAt: "2022-03-22",
        },
        {
          name: "Landscape Photography of Mountains Covered in Snow",
          url: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 3,
          createdAt: "2022-01-30",
          updatedAt: "2022-01-30",
        },
        {
          name: "Snow-top Mountain Under Clear Sky",
          url: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 2,
          createdAt: "2022-03-25",
          updatedAt: "2022-03-25",
        },
        {
          name: "Photo of Daisy Flowers",
          url: "https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 1,
          createdAt: "2022-03-12",
          updatedAt: "2022-03-12",
        },
        {
          name: "White Petaled Flowers",
          url: "https://images.pexels.com/photos/2512280/pexels-photo-2512280.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 4,
          createdAt: "2022-04-05",
          updatedAt: "2022-04-05",
        },
        {
          name: "Photo of Leaves",
          url: "https://images.pexels.com/photos/1382393/pexels-photo-1382393.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 3,
          createdAt: "2022-02-21",
          updatedAt: "2022-02-21",
        },
        {
          name: "Person Holding A Green Plant",
          url: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 4,
          createdAt: "2022-01-28",
          updatedAt: "2022-01-28",
        },
        {
          name: "Closeup Photo of Sprout",
          url: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 1,
          createdAt: "2022-01-23",
          updatedAt: "2022-01-23",
        },
        {
          name: "Person's Left Hand Holding Green Leaf Plant",
          url: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg",
          location: "CA",
          description: "beautiful",
          ownerId: 2,
          createdAt: "2022-04-24",
          updatedAt: "2022-04-24",
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
