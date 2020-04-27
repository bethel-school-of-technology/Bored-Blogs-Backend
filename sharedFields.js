'use strict';
const { Sequelize } = require('sequelize');
const DataTypes = Sequelize.DataTypes;


const foo = (seq, data) => {
    console.log(seq.NOW)
    return seq.NOW;
}


module.exports = {
    fields: {
        createdAt: {
            type: DataTypes.TIME,
            allowNull: false,
            defaultValue: foo(Sequelize, DataTypes)
        },
        updatedAt: {
            type: DataTypes.TIME,
            allowNull: false,
            defaultValue: foo(Sequelize, DataTypes)
        }
    },
    options: {

    }
};