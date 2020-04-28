'use strict';
const shared = require('../sharedFields');
const s = require('sequelize');



module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    //TODO: make this more secured
    //TODO: add comparator to check equality
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(val) {
        //TODO: Hash the value
        this.setDataValue('password', val);
      }
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
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