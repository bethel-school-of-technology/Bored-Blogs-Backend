const ContactUs = require('../models').ContactUs;
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

//Get all contact submissions
router.get('/contactSubmissions', function (req, res, next) {
    util.authenticateAdmin(req, res, (admin) => {
        ContactUs.findAll({
            include: [
                {
                    model: Users,
                    as: 'author',
                }
            ]
        })
            .then(contactSubmissions => {
                res.json(contactSubmissions);
            }).catch(e => defaultErr(e, res))
    })
});

// Creates a contact submission (message from user)
router.post("/contactSubmissions", function (req, res, next) {
    util.authenticateUser(req, res, (user) => {
        var form = req.body;
        console.log(form)
        ContactUs.create({
            subject: form.subject,
            body: form.body,
            authorId: user.id
        })
            .then(result => res.json(result))
            .catch(e => defaultErr(e, res));
    });
});

// delete a message from the contact form submission message list
router.delete("/contactSubmissions/delete/:id", function (req, res, next) {
    let submissionId = parseInt(req.params.id);
    util.authenticateAdmin(req, res, (admin) => {
        ContactUs.findOne({
            where: { id: req.params.id }
        }).then(contact => { contact.destroy().then(m=>res.json(m)) });
    });
});

//very import
module.exports = router;