const Posts = require('../models').Posts;
const Users = require('../models').Users;
const { Sequelize } = require('sequelize');
var express = require('express');
var router = express.Router();
const authService = require('../services/auth'); //<--- Add authentication service
const util = require('./shareFunction');


const defaultErr = (err, res) => {
    // handle error;
    res.status(500);
    res.send(err.toString());
};

router.route('/posts')
    .get(function (req, res) {
        //TOD0NE joined author on author id
        Posts.findAll({
            //where: {

                //published: {
                //todo: find the current thing a ma bob
                //$gte: Sequelize.literal('CURRENT_TIMESTAMP')
                //}
            //},
            include: [
                util.authorDataFilter
            ]
        }).then(function (mPosts) {
            res.json(mPosts)
        }).catch(e => defaultErr(e, res));
    })
    //to add a post
    .post(function (req, res) {
        //sweep that ugly code under the rug where it belongs
        //console.log(req.headers.auth)
        util.authenticateAdmin(req, res, (admin) => {
            //i thing await is to synchronize
            //could use then i guess but i do like await more
            //await crashes app>
            var form = req.body;
            //console.log(admin)
            Posts.create({
                title: form.title,
                body: form.body,
                authorId: admin.id
                //Jackie: do we also need createdAt date?  And are we using "preview" for anything?
                // createdAt: createdAt
            }).then(theNewPost => {
                res.json(theNewPost);
            }).catch(e => defaultErr(e, res))
        })
    });

router.get('/posts/read:postId', function (req, res) {
    //TODO: join author on author id
    console.log(req.params.postId)
    Posts.findOne(
        {
            where: {
                id: req.params.postId
            },
            include: [
                util.authorDataFilter
            ]
        }
    ).then(function (mPosts) {
        res.json(mPosts)
    }).catch(e => defaultErr(e, res));
})

router.post('/posts/update:postId', function (req, res) {
    util.authenticateAdmin(req, res, (req, res, admin) => {
        Posts.findOne({
            where: {
                id: req.params.postId
            }
        }).then(post => {
            var form = req.body;
            const updoot = (key) => {
                //save some code
                if (form[key] != null) {
                    post[key] = form[key];
                }
            }
            //console.log(post)
            updoot('title')
            updoot('body')
            updoot('authorId')
            //console.log(post)
            post.save().then(e => {
                res.json(e);
            })
        }).catch(e => defaultErr(e, res))
    })
})

// DELETE A POST BY ID (admin only) // written by Jackie
router.post("/posts/delete/:id", function (req, res, next) {
    let postID = parseInt(req.params.id);
    let token = req.cookies.jwt;
    if (token) {
        authService.verifyUser(token)
            .then(user => {
                if (user.Admin) {
                    Posts.findOne({
                        where: { id: req.params.postId }
                    })
                    models.posts
                        .update({ Deleted: true }, { where: { postId: postID } })
                } else {
                    res.send("You are not Admin. Unable to delete post.");
                }
            });
    }
});

module.exports = router;