'use strict';
const shared = require('../shared');

module.exports = (sequelize, DataTypes) => {
  const Games = sequelize.define('Games', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ...shared.fields
  }, {
    ...shared.options
  }
  );
  Games.associate = function (models) {
    // associations can be defined here
    Games.belongsTo(models.Bio);
  };
  return Games;
};
