"use strict";

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_name: {
        type: sequelize.STRING,
        allowNull: false,
      },
      first_name: {
        type: sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: sequelize.STRING,
        allowNull: false,
      },
      is_admin: {
        type: sequelize.BOOLEAN,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
