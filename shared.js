'use strict';
const { Sequelize } = require('sequelize');



module.exports = {
    fields: {
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },
    options: {
        // don't forget to enable timestamps!
        timestamps: true,
        //parnoid means it won't delete but just say it deleted
        paranoid: true,
        timezone:"-05:00"
    }
};