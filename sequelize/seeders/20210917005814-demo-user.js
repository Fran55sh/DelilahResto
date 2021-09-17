"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          user_name: "admin",
          first_name: "franco",
          last_name: "corvatta",
          email: "corvattafranco@gmail.com",
          password: "admin1234",
          phone: "4564564",
          address: "Av Colon 89",
          is_admin: true,
        },
      ],
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
