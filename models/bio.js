'use strict';
const shared = require('../shared');
const authService = require('../services/auth'); //<--- Add authentication service

module.exports = (sequelize, DataTypes) => {
  const Bio = sequelize.define('Bio', {
    //? KAYLA: @Jacob how to make Array a type? perhaps use square brackets and define another model?
/*  favoriteGames: {
   type: DataTypes.ARRAY(DataTypes.STRING),
   allowNull: true,

}, */
  birthday: {
    type: DataTypes.INTEGER(),
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
    Bio.belongsTo(models.Users);
  };
  return Bio;
};
