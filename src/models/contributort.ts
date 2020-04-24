'use strict';
//contrib
module.exports = (sequelize, DataTypes) => {
  const Contributor = sequelize.define('Contributor', {
    bio: DataTypes.STRING
  }, {});
  Contributor.associate = function (models) {
    // associations can be defined here
    Contributor.belongsTo(models.Users,{/** */})
  };
  return Contributor;
};