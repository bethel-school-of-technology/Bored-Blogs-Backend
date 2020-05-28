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

// Add a comment on a specific Post
router.route('/comments/:postId')
    .post(function (req, res) {
        util.authenticateUser(req, res, user => {
            var form = req.body;
            console.log(form);
            Comments.create({
                body: form.body,
                parentPostId: req.params.postId,
                CommentId: form.CommentId,
                authorId: user.id
            }).then(theNewComment => {                
                res.json(theNewComment);
            }).catch(e => defaultErr(e, res))
        });
    })

    

// Edit a comment on a specific post  // DO WE NEED THIS???? We shouldn't be editing comments
router.route('/comments/:commentId')
    // Lists all the comments at the bottom of a specific post
    .get(function (req, res) {
        console.log(req.params.postId);
        Comments.findAll({
            where: {
                parentPostId: req.params.postId
            },
            include: util.authorDataIncludes
        }).then(
            c => {
                res.json(c)
            }
        ).catch(e => defaultErr(e, res))
    })
    .put(function (req, res) {
        util.authenticateUser(req, res, user => {
            var form = req.body;
            Comments.findOne({
                where: {
                    id: req.params.commentId
                }
            }).then(comment => {

            })
            return;
            Comments.create({
                body: form.body,
                parentPostId: req.params.postId,
                CommentId: form.CommentId,
                authorId: user.id
            }).then(theNewComment => {
                res.json(theNewComment);
            }).catch(e => defaultErr(e, res))
        });
    });

// DELETE A COMMENT BY ID (admin only)  // written by Jackie
router.delete("/comments/:id", function (req, res, next) {
    // let commentId = parseInt(req.params.id);
    util.authenticateAdmin(req, res, (admin) => {
        Comments.findOne({
            where: { id: req.params.id }
        }).then(comment => {
            comment.destroy().then(m => res.json(m))
        });
    });
});


module.exports = router;