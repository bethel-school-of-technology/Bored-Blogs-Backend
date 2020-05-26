var express = require('express');
var router = express.Router();
var models = require('../models'); //<--- Add models
var authService = require('../services/auth'); //<--- Add authentication service

function loginVibeCheck(req, res, next, lambda) {
    let token = req.cookies.jwt;
    if (token) {
        //when token expires bad things happen
        var foo = authService.verifyUser(token);
        console.log(foo);
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

// Admin only - view list of users
// router.get('/', (req, res, next) => {
router.get('/users/list', (req, res, next) => {
    loginVibeCheck(req, res, next, user => {
        //put code here                    
        models.Users.findAll({
        }).then(
            e => {
                if (user.Admin) {
                    // res.render('adminUserList', { user: e })
                    res.json(e);
                } else {
                    res.status(403);
                    res.send('Unauthorized to view users-list page');
                }
            }
        )
    })
});
  
// DO WE NEED THIS? We should only delete users, not edit them (Jacke)
router.get('/editUser/:id', (req, res, next) => {
    loginVibeCheck(req, res, next, user => {
        if (user.Admin) {
            //todo check author
            models.users.findByPk(parseInt(req.params.id)).then(
                userView => {
                    models.posts.findAll({
                        where: { UserId: userView.UserId }
                    })
                        .then(p => {
                            res.render('adminUserProfile', { user: userView, post: p })
                        })
                }
            )
        } else {
            res.status(403);
            res.send('Unauthorized to view this page');
        }
    })
});

//deletes
router.post("/deleteUser/:id", (req, res, next) => {
    loginVibeCheck(req, res, next, user => {
        if (user.Admin) {
            models.users.update(
                { deleted: 1 }, {
                where: {
                    userId: parseInt(req.params.id)
                }
            }
            ).then((result) => {
                console.log(result);
                res.send("success");
            })
        }
        else {
            res.status(403);
            res.send('Unauthorized to view this page');
        }
    })
});

router.post("/deletePost/:id", (req, res, next) => {
    loginVibeCheck(req, res, next, user => {
        if (user.Admin) {
            models.posts.update(
                { deleted: 1 }, {
                where: {
                    PostId: parseInt(req.params.id)
                }
            }
            ).then((result) => {
                console.log(result);
                res.send("success");
            })
        }
        else {
            res.status(403);
            res.send('Unauthorized to view this page');
        }
    })
});
module.exports = router;