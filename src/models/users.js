'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    createdAt: {
      type: DataTypes.TIME,
      defaultValue: DataTypes.NOW
    },
    updatedAt: DataTypes.DATE,
    //MyUtilities.defualtFields
  }, {
    // don't forget to enable timestamps!
    timestamps: true,
    paranoid: true,
  }
  );
  Users.associate = function (models) {
    // associations can be defined here
  };
  return Users;
};