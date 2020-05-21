const ContactUs = require('../models').ContactUs;
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
router.get('/', function (res, next) {
    util.authenticateAdmin(req, res, (admin) => {
        ContactUs.findAll({})
            .then(contactSubmissions => {
                res.json(contactSubmissions);
            }).catch(e => defaultErr(e, res))
    })
});

// delete a contact submission
router.delete("/:id", function (req, res, next) {
    let submissionId = parseInt(req.params.id);
    models.contactSubmissions
        .update(
            { Deleted: true },
            {
                where: { id: submissionId }
            }
        ).then(result => res.redirect("/"));
})

//updates a contact submission
router.post("/", function (req, res, next) {
    models.contactSubmissions.create(req.body)
        .then(result => res.json(result));
});

//very import
module.exports = router;