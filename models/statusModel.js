const {DataTypes} = require('sequelize');

const connection = require('../conection')

const statusModel = connection.define(
    'status',
    {
        status: {
            type: DataTypes.STRING
        }
    },
    {timestamps: false},
    {freezeTableName: true}
);

module.exports = statusModel;