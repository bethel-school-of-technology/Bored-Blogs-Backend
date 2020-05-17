'use strict';
const shared = require('../shared');

module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    //TODO: status
    //status
    published: {
      type: 'TIMESTAMP',
      //we want to save a post but not publish it
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      //allowNull: false
    },
    ...shared.fields
  }, {
    ...shared.options
  });
  Posts.associate = function (models) {
    // associations can be defined here

    //the author goes down here
    Posts.belongsTo(models.Users, { as: 'author' })
  };
  return Posts;
};