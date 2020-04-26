'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.STRING,
    createdAt: {
      type: DataTypes.TIME,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.TIME,
      defaultValue: DataTypes.NOW
    },
  }, {
    // don't forget to enable timestamps!
    timestamps: true,
    //parnoid means it won't delete but just say it deleted
    paranoid: true,
  }
  );
  Comment.associate = function (models) {
    //console.log(models);
    // associations can be defined here
    Comment.hasMany(models.Comment, {});
    Comment.belongsTo(models.Post, {});
  };
  return Comment;
};