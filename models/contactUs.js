'use strict';
const shared = require('../shared');

module.exports = (sequelize, DataTypes) => {
  const ContactUs = sequelize.define('contactUs', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
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