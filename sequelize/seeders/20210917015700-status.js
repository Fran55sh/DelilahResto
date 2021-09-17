"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("status", [
      {
        name: "new",
      },
      {
        name: "confirmed",
      },
      {
        name: "preparing",
      },
      {
        name: "in transit",
      },
      {
        name: "canceled",
      },
      {
        name: "delivered",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("status", null, {});
  },
};
