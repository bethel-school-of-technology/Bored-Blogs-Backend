'use strict';
const shared = require('../shared');

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
    // OtherWork.belongsTo(models.Bio);
  };
  return OtherWork;
};
