'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    firstName: DataTypes.STRING
  }, {});
  Posts.associate = function(models) {
    // associations can be defined here
  };
  return Posts;
};