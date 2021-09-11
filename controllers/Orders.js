require("dotenv").config();
const orderModel = require("../models/orderModel");
const userModel = require("../models/userModel");
const statusModel = require("../models/statusModel");
const placedOrderModel = require("../models/placedOrderModel");
const productModel = require("../models/productModel");
const paytypes = require("../models/payment_types");

class Orders {
  static async getAllorders(req, res) {
    try {
      const orders = await orderModel.findAll({
        attributes: {
          exclude: ["status_id", "user_id", "pay_type_id"],
        },
        include: [
          {
            model: userModel,
            as: "user",
            attributes: {
              exclude: ["user_id", "password", "is_admin"],
            },
          },
          "status",
          "paytypes",
          {
            model: placedOrderModel,
            as: "placedOrder",
            include: [
              {
                model: productModel,
                as: "products",
                attributes: ["name"],
              },
            ],
            attributes: {
              exclude: ["order_id"],
            },
          },
        ],
      });
      if (!orders) {
        return res.status(404).json({
          status: 404,
          message: "there are no orders ",
        });
      }
      return res.json({
        status: 200,
        orders: orders,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error,
      });
    }
  }

  static async getOrdersByUserId(req, res) {
    try {
      const orders = await orderModel.findAll({
        where: { user_id: req.params.user_id },

        attributes: {
          exclude: ["status_id", "user_id", "pay_type_id"],
        },

        include: [
          {
            model: userModel,
            as: "user",
            attributes: {
              exclude: ["user_id", "password", "is_admin"],
            },
          },
          "status",
          "paytypes",
          {
            model: placedOrderModel,
            as: "placedOrder",
            include: [
              {
                model: productModel,
                as: "products",
                attributes: ["name"],
              },
            ],
            attributes: {
              exclude: ["order_id"],
            },
          },
        ],
      });
      if (!orders) {
        return res.status(404).json({
          status: 404,
          message: "there are no orders ",
        });
      }
      return res.json({
        status: 200,
        orders: orders,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error,
      });
    }
  }

  static async getorderById(req, res) {
    const id = req.params.id;
    try {
      const order = await orderModel.findByPk(id, {
        include: ["status", "user", "order"],
      });
      if (!order) {
        return res.status(404).json({
          status: 404,
          message: `there are no orders with id ${id}`,
        });
      }
      return res.json({
        stasus: 200,
        data: order,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error,
      });
    }
  }

  static async postOrder(req, res) {
    const { status_id, user_id, date_time, total, pay_type_id } = req.body;
    const { order_product } = req.body;
    console.log(user_id);
    try {
      const order = await orderModel.create({
        status_id,
        user_id,
        date_time,
        total,
        pay_type_id,
      });

      const order_id = order.id;
      order_product.forEach((product, array) => {
        product.order_id = order_id;
      });

      const order_Product = await placedOrderModel.bulkCreate(order_product);

      return res.status(201).json({
        status: 201,
        message: "order created",
        data: { order_id: order.id },
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }

  static async updateOrder(req, res) {
    const { date_time, status_id, pay_type_id } = req.body;

    try {
      const order = await orderModel.update(
        {
          date_time,
          status_id,
          pay_type_id,
        },
        {
          where: { id: req.params.id },
        }
      );

      if (!order) {
        return res.status(404).json({
          status: 404,
          message: "order not found",
        });
      }

      return res.status(202).json({
        status: 202,
        message: "order update",
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }

  static async deleteOrder(req, res) {
    try {
      await placedOrderModel.destroy({
        where: {
          order_id: req.params.id,
        },
      });

      const order = await orderModel.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (!order) {
        return res.status(404).json({
          status: 404,
          message: "order not found",
        });
      }

      return res.status(202).json({
        status: 202,
        message: "order deleted",
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }
}

module.exports = Orders;
