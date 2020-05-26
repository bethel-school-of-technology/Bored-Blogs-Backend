'use strict';
const shared = require('../shared');
const authService = require('../services/auth'); //<--- Add authentication service

module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //this is gonna hurt TODO: eventually

    ...shared.fields
  }, {
    ...shared.options
  }
  );
  Game.associate = function (models) {
    // associations can be defined here
    Game.belongsTo(models.Bio);
  };
  return Game;
};