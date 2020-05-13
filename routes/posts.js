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

module.exports = router;