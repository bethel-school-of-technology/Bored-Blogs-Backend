'use strict';
const shared = require('../shared');
const authService = require('../services/auth'); //<--- Add authentication service

module.exports = (sequelize, DataTypes) => {
  const FavoriteGame = sequelize.define('favoriteGame', {
    title: {
      type: DataTypes.TEXT
    },

    //this is gonna hurt TODO: eventually

    ...shared.fields
  }, {
    ...shared.options
  }
  );
  FavoriteGame.associate = function (models) {
    // associations can be defined here
    FavoriteGame.belongsTo(models.Bio);
  };
  return FavoriteGame;
};
