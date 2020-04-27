'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    content: DataTypes.STRING,
    createdAt: {
      type: DataTypes.TIME,
      allowNull: false,
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
  });
  Posts.associate = function (models) {
    // associations can be defined here
    Posts.belongsTo(models.Users, {})
  };
  return Posts;
};