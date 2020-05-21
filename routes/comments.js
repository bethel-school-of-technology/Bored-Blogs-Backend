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

router.route('/comments/create/:postId')
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
    });

    // is this for "Read all the comments" on a post? (Jackie)
router.get('/comments/read/:postId', function (req, res) {
    console.log(req.params.postId);
    Comments.findAll({
        where: {
            parentPostId: req.params.postId
        },
        include: [
            util.authorDataFilter
        ]
    }).then(
        c => {

            res.json(c)
        }
    ).catch(e => defaultErr(e, res))
})

router.route('/comments/update/:commentId')
    .post(function (req, res) {
        util.authenticateUser(req, res, user => {
            var form = req.body;
            Comments.findOne({
                where: {
                    id: req.params.commentId
                }
            }).then(comment=>{
                
            })
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










/*
jacob i dont mean to be rude but u could do this
util.authenticateAdmin(req, res, admin => { Comments.destory({ where: { commentId: +req.params.id } }) })
*/
// DELETE A COMMENT BY ID (admin only)  // written by Jackie

// should comments be deleted by "CommentId"? (per the code in 'comments/create' above)
router.post("/comments/delete/:id", function (req, res, next) {
    let commentID = parseInt(req.params.id);
    let token = req.cookies.jwt;
    if (token) {
        authService.verifyUser(token)
            .then(user => {
                if (user.Admin) {
                    Comments.findOne({
                        where: { id: req.params.commentId }
                    })
                    models.comments.update({ Deleted: true }, { where: { commentId: commentID } })
                } else {
                    res.send("You are not Admin. Unable to delete comment.");
                }
            });
    }
});

module.exports = router;