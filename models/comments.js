'use strict';
const shared = require('../shared');

module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    body: DataTypes.STRING,
    posted: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    ...shared.fields
  }, {
    ...shared.options
  }
  );
  Comments.associate = function (models) {
    //console.log(models);
    // associations can be defined here
    Comments.hasMany(models.Comments, {});
    Comments.belongsTo(models.Posts, {
      allowNull: false
    });
    Comments.belongsTo(models.Users, { as: 'author' });
  };
  return Comments;
};