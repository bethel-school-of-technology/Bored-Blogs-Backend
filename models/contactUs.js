'use strict';
const shared = require('../shared');

module.exports = (sequelize, DataTypes) => {
  const ContactUs = sequelize.define('ContactUs', {    
    subject: DataTypes.STRING,
    body: DataTypes.STRING,    
    ...shared.fields
  }, {
    ...shared.options
  }
  );
  ContactUs.associate = function (models) {
    // associations can be defined here
    ContactUs.belongsTo(models.Users, { as: 'author' });
  };
  return ContactUs;
};