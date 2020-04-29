var Posts = require('../models').Posts;
var express = require('express');
var router = express.Router();

router.route('/')
    .get(function (req, res) {
        //return res.send('hi');
        console.log(Posts);
        let user = Posts.findAll({
        });

        user.then(function (users) {
            res.send(users)
        });
    })
    .post(function (req, res) {
        var bod = req.body;
        //console.log(req);
        console.log(bod);
        Posts.create({
            title: bod.email,
            content: bod.content
        }).then(newPost => {
            res.send(`New post ${newPost.title}, with id ${newPost.id} has been created.`);
        }).catch(function (err) {
            // handle error;
            res.status(500)
            res.send(err)
        });
    });

module.exports = router;