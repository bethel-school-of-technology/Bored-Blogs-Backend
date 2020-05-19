'use strict';
const shared = require('../shared');
const authService = require('../services/auth'); //<--- Add authentication service
module.exports = (sequelize, DataTypes) => {
  const ContactUs = sequelize.define('Accounts', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    id: DataTypes.NUMBER,
    subject: DataTypes.STRING,
    body: DataTypes.STRING,
    ...shared.fields
  }, {
    ...shared.options
  }
  );
  ContactUs.associate = function (models) {
    // associations can be defined here
  };
  return ContactUs;
};