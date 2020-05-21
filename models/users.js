'use strict';
const shared = require('../shared');
const authService = require('../services/auth'); //<--- Add authentication service

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(val) {
        this.setDataValue('password', authService.hashPassword(val));
      }
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bio: {//down here is the options for the collum
      type: DataTypes.TEXT

    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    lastLoggedIn: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    // createdAt: {
    //   type: 'TIMESTAMP',
    //   defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    //   allowNull: false
    // },
    style: {
      type: DataTypes.STRING,
    },
    ...shared.fields
  }, {
    ...shared.options
  }
  );
  Users.associate = function (models) {
    // associations can be defined here
  };
  return Users;
};