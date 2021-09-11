const {DataTypes} = require('sequelize');

const connection = require('../conection')

const productModel = connection.define(
    'products',
    {
        url_img: {
            type: DataTypes.STRING
        },
        name:{
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        }
    },
    {timestamps: false}  
);

module.exports = productModel;