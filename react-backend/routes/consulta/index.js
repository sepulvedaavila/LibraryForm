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


router.get('/search:title', function (req, res) {
    var title = req.params.title;
    modelPeliculas.find({Title:new RegExp(title,'i')},function(err,data){
        if(err){ 
            //console.log(err);
            console.log('Si hay ERRNO');
        } else {
            console.log('No hay ERRNO');
            var titles = data.map(elem=>{
                return elem.Title;
            });
            console.log(titles);
            res.status(200).send( { data: titles });
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
