const {DataTypes} = require('sequelize');
const connection = require('../conection');

const paymentTypesmodel = connection.define(
    'paytypes',
    {  
        name: {
            type: DataTypes.STRING
        }
    },
    {timestamps: false}  
);

module.exports = paymentTypesmodel;