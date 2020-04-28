var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  //return res.send('hi');
  console.log(models.Users);
  let user = models.Users.findAll({
  });

  user.then(function (users) {
    res.send(users)
  });
});

router.put('/', function (req, res) {
  //return res.send('hi');
  console.log(models.Users);
  let user = models.Users.findAll({
  });

  user.then(function (users) {
    res.send(users)
  });
});

module.exports = router;