'use strict';
const shared = require('../shared');
const authService = require('../services/auth'); //<--- Add authentication service

module.exports = (sequelize, DataTypes) => {
  const Style = sequelize.define('Style', {
    "background-color":{
      type:DataTypes.STRING
    },
    ...shared.fields
  }, {
    ...shared.options
  }
  );
  Style.associate = function (models) {
    // associations can be defined here
    Comments.belongsTo(models.Users);
  };
  return Style;
};