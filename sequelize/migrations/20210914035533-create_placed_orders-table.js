"use strict";

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("placed_orders", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      order_id: {
        type: sequelize.INTEGER,
        references: { model: "orders", key: "id" },
        allowNull: false
      },
      product_id: {
        type: sequelize.INTEGER,
        references: { model: "products", key: "id" },
        allowNull: false
      },
      amount: {
        type: sequelize.DOUBLE,
        allowNull: false
      },
      price: {
        type: sequelize.DOUBLE,
        allowNull: false
      },
      details: {
        type: sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
