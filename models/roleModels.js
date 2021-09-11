const {DataTypes} = require('sequelize');

const connection = require('../conection')

const roleModel = connection.define(
    'roles',
    {
        role: {
            type: DataTypes.STRING
        }
    },
    {timestamps: false}  
);

module.exports = roleModel;