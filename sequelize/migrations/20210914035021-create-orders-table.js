'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("orders", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      status_id: {
        type: sequelize.INTEGER,
        references: {model: 'status', key: 'id'}
      },
      user_id : {
        type:Sequelize.INTEGER,
        references: {model: 'users', key: 'id'}
      },
      date_time : {
        type:Sequelize.DATE,
        allowNull: false
      },
      total: {
        type: sequelize.BIGINT,
        allowNull: false
      },
      pay_type_id: {
        type: sequelize.INTEGER,
        references: {model:'pay_types', key: 'id'}
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.dropTable('orders');
     
  }
};
