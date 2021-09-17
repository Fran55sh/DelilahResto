'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "pay_types",
      [
        {
          name: "cash"
        },
        {
          name: "Debit Card"
        },
        {
          name: "Credit Card"
        },
        {
          name: "Bank Transfer"
        },
      ],
    );
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete('pay_types', null, {});
     
  }
};
