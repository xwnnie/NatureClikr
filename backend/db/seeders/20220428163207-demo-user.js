"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          displayName: "Demo User",
          location: "Mountain View, CA",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: "2019-04-12",
          updatedAt: "2019-04-12",
        },
        {
          email: "ellen@user.io",
          username: "ellen0119",
          displayName: "Ellen Brown",
          location: "Pheonix, AZ",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: "2019-04-12",
          updatedAt: "2019-04-12",
        },
        {
          email: "loui@user.io",
          username: "loui_Li",
          displayName: "Loui Li",
          location: "Salt Lake City, UT",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: "2020-04-12",
          updatedAt: "2020-04-12",
        },
        {
          email: "ashley@user.io",
          username: "ashley2000",
          displayName: "Ashley Jackson",
          location: "Albany, NY",
          hashedPassword: bcrypt.hashSync("password"),
          createdAt: "2020-04-12",
          updatedAt: "2020-04-12",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
