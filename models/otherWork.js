'use strict';
const shared = require('../shared');
const authService = require('../services/auth'); //<--- Add authentication service

module.exports = (sequelize, DataTypes) => {
  const OtherWork = sequelize.define('OtherWork', {
    link: {
      type: DataTypes.TEXT,
    },

    ...shared.fields
  }, {
    ...shared.options
  }
  );
  OtherWork.associate = function (models) {
    // associations can be defined here
    OtherWork.belongsTo(models.Bio);
  };
  return OtherWork;
};
