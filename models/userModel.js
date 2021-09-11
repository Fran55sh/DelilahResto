const {DataTypes} = require('sequelize');

const connection = require('../conection')

const userModel = connection.define(
    'users',
    {
        user_name: {
            type: DataTypes.STRING
        },
        first_name:{
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.INTEGER
        },
        phone: {
            type: DataTypes.INTEGER
        },
        address:{
            type: DataTypes.STRING
        },
        is_admin: {
            type: DataTypes.INTEGER
        }
    },
    {timestamps: false}  
);

module.exports = userModel;