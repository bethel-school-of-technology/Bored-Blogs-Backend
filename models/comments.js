'use strict';
const shared = require('../shared');

module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    body: DataTypes.STRING,


    ...shared.fields
  }, 
  {
    ...shared.options
  }
  );
  Comments.associate = function (models) {
    //console.log(models);
    // associations can be defined here
    Comments.hasMany(models.Comments, {
      as: 'parentComment'
    });
    Comments.belongsTo(models.Posts, {
      as: 'parentPost'
    });
    Comments.belongsTo(models.Users, { as: 'author' });
  };
  return Comments;
};