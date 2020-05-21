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

//Get all contact submissions
router.get('/', function(res, next){
    let token = req.cookies.jwt;
    if (token) {
        models.contactSubmissions
        .findAll({
            where: { PostId: PostId, Deleted: false }
        })
        .then(result => res.prependListener("contactSubmissions", {contactSubmissions: result }));
    } else {
        res.status(401);
        res.send("MustBeLoggedIn");
    }
});

// delete a contact submission
router.delete("/:id", function(req, res, next) {
    let submissionId = parseInt(req.params.id);
    models.contactSubmissions
    .update(
        { Deleted: true },
        {
            where: {id: submissionId }
        }
    ) .then(result => res.redirect("/"));
})

//createa a contact submission
router.put("/create/:id", function(req, res, next) {
    let submissionId = parseInt(req.params.id);
    models.contactSubmissions
    .update(req.body, {where: {id: submissionId }})
    .then(result => res.redirect("/"));
});

//very important
module.exports = router;