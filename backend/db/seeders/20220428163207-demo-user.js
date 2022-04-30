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
        },
        {
          email: "ellen@user.io",
          username: "ellen0119",
          displayName: "Ellen Brown",
          location: "Pheonix, AZ",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "loui@user.io",
          username: "loui_Li",
          displayName: "Loui Li",
          location: "Salt Lake City, UT",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "ashley@user.io",
          username: "ashley2000",
          displayName: "Ashley Jackson",
          location: "Albany, NY",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    // const Op = Sequelize.Op;
    // return queryInterface.bulkDelete(
    //   "Users",
    //   {
    //     username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] },
    //   },
    //   {}
    // );
    return queryInterface.bulkDelete("Users", null, {});
  },
};
