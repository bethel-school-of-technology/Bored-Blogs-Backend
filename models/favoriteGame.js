'use strict';
const shared = require('../shared');
const authService = require('../services/auth'); //<--- Add authentication service

module.exports = (sequelize, DataTypes) => {
  const favoriteGame = sequelize.define('favoriteGame', {
    title: {
      type: DataTypes.TEXT
    },

    //this is gonna hurt TODO: eventually

    ...shared.fields
  }, {
    ...shared.options
  }
  );
  favoriteGame.associate = function (models) {
    // associations can be defined here
    favoriteGame.belongsTo(models.Bio);
  };
  return favoriteGame;
};
