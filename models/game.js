'use strict';
const shared = require('../shared');

module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
