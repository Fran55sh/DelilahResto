'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.createTable('pay_types', { 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name:{
          type: sequelize.STRING
        }
        });
   
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('pay_types');
 
  }
};
