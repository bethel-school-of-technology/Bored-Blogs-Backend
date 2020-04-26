'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
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
  });
  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(Post, {})
  };
  return Post;
};