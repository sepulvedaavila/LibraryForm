var express = require('express');
var cors = require('cors');
var modelPeliculas = require('../../models/peliculas');
var router = express.Router();

router.use(cors());

var baseRoute = "/pelicula";

router.post('/:id',function(req, res){
    var id = req.params.id;
    console.log(id);
    modelPeliculas.findOne({_id:id}, function(err, obj){
        if(err){
            console.log(err);
        }else{
            console.log(obj);
            res.status(200).send({pelicula: obj});
        }
    });
});

router.get('/:id',function(req, res){
    var id = req.params.id;
    console.log("RUTA PELIS");
    modelPeliculas.findOne({_id:id}, function(err, obj){
        if(err) console.log(err); 
        res.render('pelicula',{
            obj: obj
        });
    });
});

module.exports = router;
