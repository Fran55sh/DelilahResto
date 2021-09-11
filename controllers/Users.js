require("dotenv").config();
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

class User {
  static async getAllUsers(req, res) {
    try {
      const users = await userModel.findAll({
        attributes: {
          exclude: ["password"],
        },
      });

      return res.status(200).json({
        status: 200,
        data: users,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error,
      });
    }
  }

  static async getUserById(req, res) {
    try {
      const users = await userModel.findOne({
        where: {
          id: req.params.id,
        },
        attributes: {
          exclude: ["password"],
        },
      });

      if (!users) {
        return res.status(404).json({
          status: 404,
          message: `user with user id: ${user_id} not found`,
        });
      }

      return res.status(200).json({
        status: 200,
        data: users,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  }

  static async postuser(req, res) {
    const {
      user_name,
      first_name,
      last_name,
      email,
      phone,
      address,
      password,
      is_admin,
    } = req.body;

    try {
      const userCreated = await userModel.create({
        user_name,
        first_name,
        last_name,
        email,
        phone,
        address,
        password,
        is_admin,
      });

      return res.status(201).json({
        status: 201,
        message: "user created",
        data: { user_id: userCreated.id },
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error,
      });
    }
  }

  static async updateUser(req, res) {
    const id = req.params.id;
    const user = await userModel.findByPk(id);
    const { user_name, password, phone, address } = req.body;
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "user not found",
      });
    }
    try {
      userModel.update(
        {
          user_name,
          password,
          phone,
          address,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return res.status(200).json({
        status: 200,
        message: `user id ${id} updated`,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error,
      });
    }
  }

  static async deleteUser(req, res) {
    const id = req.params.id;
    const user = await userModel.findByPk(id);
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "user not found",
      });
    }
    try {
      userModel.destroy({
        where: {
          id: id,
        },
      });
      return res.status(201).json({
        status: 201,
        message: `user id ${id} deleted`,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error,
      });
    }
  }
}

module.exports = User;
