'use strict';
const shared = require('../shared');
const authService = require('../services/auth'); //<--- Add authentication service

module.exports = (sequelize, DataTypes) => {
  const Bio = sequelize.define('Bio', {
  favoriteGames: {
    //?Can't figure out how to insert an array
  },
  birthday: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  other: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  otherWorks: {
    type: DataTypes.STRING, //? Can STRING also mean a url? That's what this one needs to be
    allowNull: false,
  },
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
