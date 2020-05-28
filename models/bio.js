'use strict';
const shared = require('../shared');

module.exports = (sequelize, DataTypes) => {
  const Bio = sequelize.define('Bio', {
    //?HOW DO I ADD IN THE ARRAY FOR favoriteGames?
    body: {
      type: DataTypes.TEXT
    },
    birthday: {
      type: DataTypes.TEXT
    },
    other: {
      type: DataTypes.TEXT,
      allowNull: !false,
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
    Bio.hasMany(models.Games);
    Bio.hasMany(models.OtherWork);
  };
  return Bio;
};
