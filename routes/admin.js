var express = require('express');
var router = express.Router();
const Models = require('../models'); //<--- Add models
const util = require('./shareFunction');


const defaultErr = (err, res) => {
    // handle error;
    res.status(500);
    res.send(err.toString());
};

// Admin only - view list of users
// router.get('/', (req, res, next) => {
router.get('/users/list', (req, res, next) => {
    util.authenticateAdmin(req, res, (admin) => {
        Models.Users.findAll({
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

// deletes a user (Admin Only) then refreshes the list of users (without the deleted one)
router.delete("/users/:id", (req, res, next) => {
    util.authenticateAdmin(req, res, (admin) => {
        Models.Users.findOne({
            where: {
                isAdmin: 0,
                id: +req.params.id
            }
        }).then(
            e => {
                e.destroy().then(() => {
                    Models.Users.findAll({
                        where: { isAdmin: 0 }
                    }).then(users =>
                        res.send(users)
                    );
                });
            }
        ).catch(e => defaultErr(e, res))
    });
});


module.exports = router;