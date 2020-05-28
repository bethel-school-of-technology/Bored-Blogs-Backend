'use strict';
const shared = require('../shared');

module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    preview: DataTypes.STRING,

    relatedGames: DataTypes.STRING,   //this is an array
    tags: DataTypes.STRING,            //this is an array of characters yes strings no

    //TODO: status
    //status
    published: {
      type: 'TIMESTAMP',
      //if we dont specify a published date
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
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