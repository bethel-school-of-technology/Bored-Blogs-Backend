'use strict';
const shared = require('../shared');

module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    ...shared.fields
  }, {
    ...shared.options
  });
  Posts.associate = function (models) {
    // associations can be defined here
    Posts.belongsTo(models.Users, {})
  };
  return Posts;
};