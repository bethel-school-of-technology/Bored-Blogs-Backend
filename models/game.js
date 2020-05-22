'use strict';
const shared = require('../shared');
const authService = require('../services/auth'); //<--- Add authentication service

module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    //this is gonna hurt TODO: eventually
    
    ...shared.fields
  }, {
    ...shared.options
  }
  );
  Game.associate = function (models) {
    // associations can be defined here
    Comments.belongsTo(models.Bio);
  };
  return Game;
};