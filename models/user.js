'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    //TODO: make this more secured
    //TODO: add comparator to check equality
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(val) {
        //TODO: Hash the value
        this.setDataValue('password', val);
      }
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
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
  Users.associate = function (models) {
    // associations can be defined here
  };
  return Users;
};