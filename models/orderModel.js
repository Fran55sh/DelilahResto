const {DataTypes} = require('sequelize');

const connection = require('../conection')
const statusModel = require('./statusModel')
const userModel = require('./userModel')
const placedOrderModel = require('./placedOrderModel')
const paytypes = require('./paymentTypes')

const orderModel = connection.define(
    'orders',
    {
        status_id: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        date_time:{
            type: DataTypes.DATE
        },
        total:{
            type: DataTypes.DOUBLE
        },
        pay_type_id:{
            type: DataTypes.INTEGER
        }
    },   
    {timestamps: false}
);

orderModel.belongsTo(statusModel, {as: 'status', foreignKey: 'status_id'});
orderModel.belongsTo(userModel, {as: 'user', foreignKey: 'user_id'});
orderModel.belongsTo(paytypes, {as: 'paytypes', foreignKey: 'pay_type_id'});
orderModel.hasMany(placedOrderModel, {as: 'placedOrder', foreignKey: 'order_id'});
module.exports = orderModel;