'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.createTable('paytypes', { 
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

    await queryInterface.dropTable('paytypes');
 
  }
};
