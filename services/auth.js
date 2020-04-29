var models = require('../models');
var Users = models.Users;
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const secretKey = 'secretkey';
//use this class to handle authetication
var authService = {
  signUser: function (user) {
    //console.log("signIn user");
    //console.log(user)
    //console.log("userId:" + user.id);
    const token = jwt.sign(
      {
        email: user.email,
        UserId: user.id
      },
      secretKey,
      {
        expiresIn: '1h'
      }
    );
    return token;
  },
  //call back (err, decoded) =>
  verifyUser: function (token, callBackFunction) {  //<--- receive JWT token as parameter
    try {
      return jwt.verify(token, secretKey, callBackFunction);
      //let decoded = jwt.verify(token, secretKey, passInFunction); //<--- Decrypt token using same key used to encrypt      
      //return Users.findByPk(decoded.UserId); //<--- Return result of database query as promise
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  hashPassword: function (plainTextPassword) {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(plainTextPassword, salt);
    return hash;
  },
  comparePasswords: function (plainTextPassword, hashedPassword) {
    return bcrypt.compareSync(plainTextPassword, hashedPassword)
  }
}

module.exports = authService;