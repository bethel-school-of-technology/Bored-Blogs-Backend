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

router.route('/users/register')
  //create a new user at http://localhost:3001/users with post
  .post((req, res, next) => {
    //console.log(req.body)
    //console.log(Users);
    Users
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: (req.body.password) //<--- Password is hashed on model        
      })
      .then((newUser) => {
        newUser = { ...newUser.dataValues, token: authService.signUser(newUser) }
        console.log(newUser)
        res.json(newUser);
      }).catch(e => {
        res.status(403);
        res.send("malform post");
      })
  });//end post



router.route('/users/login')
  .post(function (req, res) {
    //console.log(req);
    Users.findOne({
      where: { email: req.body.email }
    }).then(user => {
      if (user == null) {
        console.log(user)
        res.status(410);
        res.send("User not found");
      } else if (authService.comparePasswords(req.body.password, user.password)) {
        //you'll need this for later

        res.json({ ...user, token: authService.signUser(user) });
      } else {
        res.send("authentication failed. bad password.");
      }
    }).catch(e => defaultErr(e, res));
  })

//trust but verify
router.post('/verify', function (req, res) {
  //console.log(req.headers);
  console.log(req.headers.auth);
  authService.verifyUser(req.headers.auth, (err, decoded) => {
    if (err) {
      res.send(err);
    }
    res.send(decoded);
  });
});


//TODO: refactor into custom middleware
router.get('users/profile', function (req, res, next) {
  let token = req.headers.auth;
  if (token) {
    //! when token expires bad things happen
    authService.verifyUser(token,
      (err, deocoded) => {
        //TODO: add
      }
    );
  } else {
    res.status(401);
    res.send('needs aut:token');
  }
});
router.get('users/contributors', function (req, res, next) {
  Users.findAll({
    attributes: [
      'firstName',
      'lastName',
      'bio',
    ]
  })
  res.json();
});


module.exports = router;