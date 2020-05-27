var express = require('express');
var router = express.Router();
var models = require('../models'); //<--- Add models
var authService = require('../services/auth'); //<--- Add authentication service
const util = require('./shareFunction');


const defaultErr = (err, res) => {
    // handle error;
    res.status(500);
    res.send(err.toString());
};

function loginVibeCheck(req, res, next, lambda) {
    let token = req.headers.auth;
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
    util.authenticateAdmin(req, res, (admin) => {
        models.Users.findAll({
            where: {
                isAdmin: 0
            }
        }).then(
            e => {
                // res.render('adminUserList', { user: e })
                res.json(e);
            }
        )
    });
});

// DO WE NEED THIS? We should only delete users, not edit them (Jacke)
// if (false) router.get('/editUser/:id', (req, res, next) => {
//     loginVibeCheck(req, res, next, user => {
//         if (user.Admin) {
//             //todo check author
//             models.users.findByPk(parseInt(req.params.id)).then(
//                 userView => {
//                     models.posts.findAll({
//                         where: { UserId: userView.UserId }
//                     })
//                         .then(p => {
//                             res.render('adminUserProfile', { user: userView, post: p })
//                         })
//                 }
//             )
//         } else {
//             res.status(403);
//             res.send('Unauthorized to view this page');
//         }
//     })
// });

// deletes a user (Admin Only) then refreshes the list of users (without the deleted one)
router.delete("/users/delete/:id", (req, res, next) => {
    util.authenticateAdmin(req, res, (admin) => {
        models.Users.findOne({
            where: {
                isAdmin: 0,
                id: +req.params.id
            }
        }).then(
            e => {
                e.destroy().then(()=>{
                    models.Users.findAll({
                        where: {
                            isAdmin: 0}}).then(users => res.send(users));
                });
                
            }
        ).catch(e => defaultErr(e, res))
    });
});


module.exports = router;