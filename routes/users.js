var Users = require('../models').Users;
var express = require('express');
var router = express.Router();
const shared = require('../shared')
const authService = require('../services/auth'); //<--- Add authentication service

const defaultErr = (err, res) => {
  // handle error;
  res.status(500);
  res.send(err.toString());
};

router.get('/profile', function (req, res, next) {
  let token = req.cookies.jwt;
  if (token) {
    //when token expires bad things happen
    var foo = authService.verifyUser(token);
    console.log(foo);
    if (foo != null) {
      foo.then(user => {
        if (user) {
          //put code here
          //todo add code to make posts here
          Users.findOne({
            where: { email: req.body.email }
          })
            .then(p => {
              res.send(p)
            });
        } else {
          res.status(401);
          res.send('Invalid authentication token');
        }
      })
    } else {
      res.status(401);
      res.send('Token expired');
    };
  } else {
    res.status(401);
    res.send('Must be logged in');
  }
});


router.route('/users')
  //create a new user at http://localhost:3001/users with post
  .post((req, res, next) => {
    console.log(req.body)
    Users
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: (req.body.password) //<--- Password is hashed on model        
      })
      .then((newUser) => {
        //TODO: sign in the user when it is created
        res.json(newUser);
      }).catch(e => defaultErr(e, res))
  });//end post

router.get('/logout', function (req, res, next) {
  res.cookie('jwt', "", { expires: new Date(0) });
  res.send('Logged out');
});


router.post('/login', function (req, res) {
  var bod = req.body;
  //console.log(req);
  console.log(bod);
  Users.findOne({
    where: { email: req.body.email }
  }).then(user => {
    if (user == null) {
      res.status(404);
      res.send("User not found");
    }
    if (authService.comparePasswords(req.body.password, user.password)) {
      //TODO: give a token or something
      res.send("you win");
    } else {
      res.send("authentication failed. bad password.");
    }
  }).catch(e => defaultErr(e, res));
})



module.exports = router;