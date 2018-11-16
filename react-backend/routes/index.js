const fetch = require('node-fetch');
var express = require('express');
var cors = require('cors');
var xmlbuilder = require('xmlbuilder');
var fs = require('fs');
var router = express.Router();

router.use(cors());

router.get('/', function (req, res) {
    res.render('index', {title: 'DGBU Systems'});
});

module.exports = router;
