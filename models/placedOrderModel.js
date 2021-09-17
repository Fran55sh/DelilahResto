const {DataTypes} = require('sequelize');

const connection = require('../conection')

const productModel = require('./productModel');
const orderModel  = require('./orderModel');
const Products = require('../controllers/products');

const placedOrderModel = connection.define(
    'placed_orders',
    {
        order_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        amount:{
            type: DataTypes.DOUBLE
        },
        price: {
            type: DataTypes.DOUBLE
        },
        details: {
            type: DataTypes.STRING
        }
    },
    {timestamps: false}           
);

placedOrderModel.belongsTo(productModel, { as: 'products', foreignKey: 'product_id' });
module.exports = placedOrderModel;