var Comments = require('../models').Comments;
var express = require('express');
var router = express.Router();
var authService = require('../services/auth'); //<--- Add authentication service



//TODO: rewrite this the normal way
//needs tooken in {token:tpken}

//authService.verifyUser(req.body.token).then(user=>{});
function loginVibeCheck(req, res, lambda) {
    let token = req.body.token;
    if (token) {
        //when token expires bad things happen
        var foo = authService.verifyUser(token);
        //console.log(foo);
        if (foo != null) {
            foo.then(user => {
                if (user) {
                    //call lambda
                    lambda(user);
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
}





router.route('/comments')
    .get(function (req, res) {
        user.then(function (users) {
            res.send(users)
        });
    })
    .post(function (req, res) {
        loginVibeCheck(req, res, user => {
            var bod = req.body;
            //console.log(req);
            console.log(bod);
            Comments.create({
                title: bod.title,
                content: bod.content
            }).then(newPost => {
                res.send(`New post ${newPost.title}, with id ${newPost.id} has been created.`);
            }).catch(function (err) {
                // handle error;
                res.status(500)
                res.send(err)
            });
        });
    });

module.exports = router;