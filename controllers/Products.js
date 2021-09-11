require("dotenv").config();
const productModel = require("../models/productModel");

class Products {
  static async getAllproducts(req, res) {
    try {
      const products = await productModel.findAll();
      if (!products) {
        return res.status(404).json({
          status: 404,
          message: "there are no products ",
        });
      }
      return res.json({
        status: 200,
        data: products,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error,
      });
    }
  }

  static async getProductrById(req, res) {
    const id = req.params.id;
    try {
      const product = await productModel.findByPk(id);

      if (!product) {
        return res.status(404).json({
          status: 404,
          message: `there are no products with id ${id}`,
        });
      }
      return res.json({
        stasus: 200,
        data: product,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error,
      });
    }
  }

  static async postProduct(req, res) {
    const { url_img, name, price } = req.body;
    try {
      const createProduct = await productModel.create({
        url_img,
        name,
        price,
      });
      return res.status(201).json({
        status: 201,
        message: `product ${createProduct.name} created`,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error,
      });
    }
  }

  static async updateProduct(req, res) {
    const id = req.params.id;
    const product = await productModel.findByPk(id);
    if (!product) {
      return res.status(404).json({
        status: 404,
        message: "product not found",
      });
    }
    try {
      const { url_img, name, price } = req.body;
      productModel.update(
        {
          url_img,
          name,
          price,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return res.status(200).json({
        status: 200,
        message: `product with id ${id} updated`,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error,
      });
    }
  }

  static async deleteProduct(req, res) {
    const id = req.params.id;
    const product = await productModel.findByPk(id);
    if (!product) {
      return res.status(404).json({
        status: 404,
        message: "product not found",
      });
    }
    try {
      productModel.destroy({
        where: {
          id: id,
        },
      });
      return res.status(201).json({
        status: 201,
        message: `product with id ${id} deleted`,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error,
      });
    }
  }
}

module.exports = Products;
