const Posts = require('../models').Posts;
const Users = require('../models').Users;
const { Sequelize } = require('sequelize');
var express = require('express');
var router = express.Router();
const authService = require('../services/auth'); //<--- Add authentication service
const util = require('./shareFunction');


const defaultErr = (err, res) => {
    // handle error;
    console.log(err);
    res.status(500);
    res.send(err.toString());
};

// Get a list of all blog posts
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
            }).then(theNewPost => {
                res.json(theNewPost);
            }).catch(e => defaultErr(e, res))
        })
    });


// Get a specific post 
router.get('/posts/read/:postId', function (req, res) {
    //TODO: join author on author id
    //console.log(req.params.postId)
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
        res.json(mPosts);
    }).catch(e => defaultErr(e, res));
})

// Update a specific post (Admin only)
router.put('/posts/update/:postId', function (req, res) {
    //console.log(req.params.postId);
    util.authenticateAdmin(req, res, (admin) => {
        Posts.findOne({
            where: {
                id: req.params.postId
            }
        }).then(post => {
            var form = req.body;
            //updoots the attribute of the object using the key
            const updoot = (key) => {
                //save some code
                if (form[key] != null) {
                    //console.log(key);
                    //console.log(form[key]);
                    post[key] = form[key];
                }
            }
            //console.log(post)
            updoot('title')
            updoot('body')
            updoot('authorId')
            //console.log('hello')
            //console.log(post)

            post.save().then(e => {
                res.json(e);
            })
        }).catch(e => defaultErr(e, res))
    })
})

// DELETE A POST BY ID (Admin only) 
router.delete("/posts/delete/:id", function (req, res, next) {
    let postID = parseInt(req.params.id);
    util.authenticateAdmin(req, res, (admin) => {
        Posts.findOne({
            where: { id: req.params.id }
        }).then(post => { post.destroy().then(p => res.json(p)) });
    });
});

module.exports = router;