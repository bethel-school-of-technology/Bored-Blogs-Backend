const Posts = require('../models').Posts;
const Users = require('../models').Users;
var express = require('express');
var router = express.Router();
const authService = require('../services/auth'); //<--- Add authentication service
const util = require('./shareFunction');



router.route('/posts')
    .get(function (req, res) {
        //TODO: join author on author id
        Posts.findAll().then(function (mPosts) {
            res.json(mPosts)
        });
    })
    //to add a post
    .post(function (req, res) {
        //sweep that ugly code under the rug where it belongs
        //console.log(req.headers.auth)
        util.authenticateAdmin(req, res, (req, res, admin) => {
            //i thing await is to synchronize
            //could use then i guess but i do like await more
            //await crashes app>
            var form = req.body;
            //console.log(admin)
            Posts.create({
                title: form.title,
                body: form.body,
                authorId: admin.id
            }).then(theNewPost => {
                res.json(theNewPost);
            })
        })
    });

router.get('/posts/read:postId', function (req, res) {
    //TODO: join author on author id
    console.log(req.params.postId)
    Posts.findOne(
        {
            where: {
                id: req.params.postId
            }
        }
    ).then(function (mPosts) {
        res.json(mPosts)
    });
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
            console.log(post)
            updoot('title')
            updoot('body')
            updoot('authorId')
            console.log(post)
            post.save().then(e => {
                res.json(post);
            })
        })
    })
})
module.exports = router;