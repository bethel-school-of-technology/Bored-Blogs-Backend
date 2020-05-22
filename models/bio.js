'use strict';
const shared = require('../shared');
const authService = require('../services/auth'); //<--- Add authentication service

module.exports = (sequelize, DataTypes) => {
  const Bio = sequelize.define('Bio', {
    //this is gonna hurt TODO: eventually
    
    ...shared.fields
  }, {
    ...shared.options
  }
  );
  Bio.associate = function (models) {
    // associations can be defined here
    Comments.belongsTo(models.Users);
  };
  return Bio;
};