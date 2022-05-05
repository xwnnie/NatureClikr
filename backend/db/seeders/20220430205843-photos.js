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
          name: "Dried flowers",
          url: "https://images.pexels.com/photos/11140552/pexels-photo-11140552.png?cs=srgb&dl=pexels-kokokara-11140552.jpg&fm=jpg",
          location: "AZ",
          description: "White background, pink magenta, green, vibrant colors",
          ownerId: 1,
          createdAt: "2022-04-12",
          updatedAt: "2022-04-12",
        },
        {
          name: "Little fox",
          url: "https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?cs=srgb&dl=pexels-alex-andrews-2295744.jpg&fm=jpg",
          location: "AZ",
          description: "Taken by NIKON D810, Focal 200.0mm, Aperture ƒ/2.8",
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
          name: "Lake Louise",
          url: "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?cs=srgb&dl=pexels-marlon-martinez-1450082.jpg&fm=jpg",
          location: "Lake Louise, AB, Canada",
          description: "Afternoon lake",
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
          name: "Ice on Body of Water Under Cloudy Sky",
          url: "https://images.pexels.com/photos/8160274/pexels-photo-8160274.jpeg?cs=srgb&dl=pexels-juliana-chyzhova-8160274.jpg&fm=jpg",
          location: "Höfn í Hornafirði, Iceland",
          description: "Relaxing",
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
        {
          name: "Clouds in the Sky",
          url: "https://images.pexels.com/photos/10821729/pexels-photo-10821729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          location: "sky",
          description: "fly to the sky",
          ownerId: 4,
          createdAt: "2022-01-24",
          updatedAt: "2022-01-24",
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
