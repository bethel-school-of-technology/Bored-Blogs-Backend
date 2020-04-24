'use strict';

module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    content: DataTypes.STRING
  }, {});
  Comments.associate = function (models) {
    // associations can be defined here
    Comments.belongsTo(models.Posts, {/** options */ })
    Comments.belongsTo(models.Users, {/** options */ })
    Comments.hasMany(Comments, {/** options */ })
  };
  return Comments;
};