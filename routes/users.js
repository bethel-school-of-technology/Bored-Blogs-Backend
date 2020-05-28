const Models = require('../models');
const Users = require('../models').Users;
var express = require('express');
var router = express.Router();
const authService = require('../services/auth'); //<--- Add authentication service
const util = require('./shareFunction');


const defaultErr = (err, res) => {
  // handle error;
  res.status(500);
  res.send(err.toString());
};

// at http://localhost:3001/users with post
// Creates an account for a new user 
router.route('/users/register')
  .post((req, res, next) => {
    //console.log(req.body)
    // console.log(Users);
    Users
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: (req.body.password) //<--- Password is hashed on model
      })
      .then((newUser) => {
        newUser = newUser.dataValues;
        newUser = { ...newUser, token: authService.signUser(newUser) }
        console.log(newUser)
        res.json(newUser);
      }).catch(e => defaultErr(e, res))
  });//end post


// Log in an exisiting user
router.route('/users/login')
  .post(function (req, res) {
    // console.log("Something fishy");
    //console.log(req);
    var email = req.body.email;
    if (email == null || req.body.password == null) {
      res.status(403).send('body missing email or password. is the form missing some fields?')
    }
    Users.findOne({
      where: { email: email }
    }).then(user => {
      if (user == null) {
        //console.log(user)
        res.status(404).send("User not found");
      } else if (authService.comparePasswords(req.body.password, user.password)) {
        //you'll need this for later
        //console.log(user.dataValues)
        res.json({
          ...user.dataValues,
          token: authService.signUser(user)
        });
      } else {
        res.status(418).send("authentication failed. bad password.");
      }
    }).catch(e => defaultErr(e, res));
  })

//trust but verify
router.post('/verify', function (req, res) {
  var token = req.headers.auth;
  //console.log(req.headers);
  console.log(token);
  authService.verifyUser(token, (err, decoded) => {
    if (err) {
      res.send(err);
    } else {
      // console.log(decoded)
      res.send("succes");
    }
  });
});

// Gets one Admin user's profile information (color style, bio, favgames, otherworks) ("Contributor Profile" pages)
router.get('/users/contributors/:id', function (req, res, next) {
  Users.findOne({
    where: {
      id: req.params.id,
      isAdmin: 1,
    },
    attributes: [
      'id',
      'firstName',
      'lastName',
      'url'
    ],
    include: util.contribDataIncludes
  }).then(
    contrib => {
      contrib = contrib.dataValues;
      contrib['bio'] = contrib['Bio']
      delete contrib.Bio;
      contrib['style'] = contrib['Style']
      delete contrib.Style;
      res.json(contrib);
    }
  ).catch(e => defaultErr(e, res))

});

// Gets a list of all Admin users ("Meet the Contributors" page)
router.get('/users/contributors', function (req, res, next) {
  Users.findAll({
    where: {
      isAdmin: 1
    },
    attributes: [
      'id',
      'firstName',
      'lastName',
      'url'
    ],
    include: [
      {
        model: Models.Style,
        attributes: [
          'background-color',
          'color',
        ],
      },
      {
        model: Models.Bio,
      },
    ]
  }).then(
    contribs => {
      contribs = contribs.map(foo => {
        foo = foo.dataValues;
        foo['bio'] = foo['Bio']
        delete foo.Bio;
        foo['style'] = foo['Style']
        delete foo.Style;
        return foo;
      });
      res.json(contribs);
    }
  ).catch(e => defaultErr(e, res))

});

//TODO: refactor into custom middleware
// Gets one user's profile information for the current logged-in user
router.get('/users/profile', function (req, res, next) {
  let token = req.headers.auth;
  util.authenticateUser(req,res,(user)=>{
    res.json(user);//TODO: give full profile with all those extra fields  
  });  
});



module.exports = router;
