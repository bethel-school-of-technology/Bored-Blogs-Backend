'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    content: DataTypes.STRING,
    createdAt: {
      type: DataTypes.TIME,
      defaultValue: sequelize.NOW
    },
    updatedAt: {
      type: DataTypes.TIME,
      defaultValue: sequelize.NOW
    },
  }, {
    // don't forget to enable timestamps!
    timestamps: true,
    //parnoid means it won't delete but just say it deleted
    paranoid: true,
  }
  );
  Comments.associate = function (models) {
    //console.log(models);
    // associations can be defined here
    Comments.hasMany(models.Comments, {});
    Comments.belongsTo(models.Posts, {});
  };
  return Comments;
};