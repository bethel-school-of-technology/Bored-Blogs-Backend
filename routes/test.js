var express = require('express');
var router = express.Router();
const test = require('../models').Test;

router.get('/test', function (req, res, next) {
    
    res.send('hello')
})


module.exports = router;