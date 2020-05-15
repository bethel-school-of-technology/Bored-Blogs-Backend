const Comments = require('../models').Comments;
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




router.route('/comments/create:postId')
    .post(function (req, res) {
        util.authenticateUser(req, res, user => {
            var form = req.body;
            //console.log(admin)
            Comments.create({
                body: form.body,
                parentPostId: req.params.postId
            }).then(theNewComment => {
                res.json(theNewComment);
            }).catch(e => defaultErr(e, res))
        });
    });
router.get('/comments/read:postId', function (req, res) {
    console.log(req.params.postId);
    Comments.findAll({
        where: {
            parentPostId: req.params.postId
        },
        inclide:[Users]
    }).then(
        c => {
            
            res.json(c)
        }
    ).catch(e => defaultErr(e, res))
})

// DELETE A COMMENT BY ID (admin only)  // written by Jackie
router.post("/comments/delete/:id", function (req, res, next) {
    let commentID = parseInt(req.params.id);
    let token = req.cookies.jwt;
    if (token) {
        authService.verifyUser(token)
            .then(user => {
                if (user.Admin) {
                    Comments.findOne({
                        where: {id: req.params.commentId}
                    })
                    models.comments.update({ Deleted: true }, { where: { commentId: commentID } })
                } else {
                    res.send("You are not Admin. Unable to delete comment.");
                }
            });
    }
});

module.exports = router;