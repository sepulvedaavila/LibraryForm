const fetch = require('node-fetch');
var express = require('express');
var cors = require('cors');
var xmlbuilder = require('xmlbuilder');
var fs = require('fs');
var mongoose = require('mongoose');
var modelPeliculas = require('../../models/peliculas');
var router = express.Router();

router.use(cors());

var baseRoute = "/consulta";


router.get('/search', function (req, res) {
    modelPeliculas.find({},function(err,data){
        if(err){ 
            console.log('Si hay ERRNO');
        } else {
            res.status(200).send( { data: data });
        }
    });
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Consulta Videograbaciones' });
});

router.post('/', function (req, res) {
    console.log(req.body);
    res.sendStatus(200);
});


module.exports = router;
