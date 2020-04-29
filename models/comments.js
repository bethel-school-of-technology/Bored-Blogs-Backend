'use strict';
const shared = require('../shared');

module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    content: DataTypes.STRING,
    ...shared.fields
  }, {
    ...shared.options
  }
  );
  Comments.associate = function (models) {
    //console.log(models);
    // associations can be defined here
    Comments.hasMany(models.Comments, {});
    Comments.belongsTo(models.Posts, {});
    Comments.belongsTo(models.Users, {});
  };
  return Comments;
};