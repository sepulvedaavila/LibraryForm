var express = require('express');
var cors = require('cors');
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

router.post('/pelicula:id',function(req, res){
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

router.get('/pelicula/:id',function(req, res){
    var id = req.params.id;
    console.log("RUTA PELIS");
    modelPeliculas.findOne({_id:id}, function(err, obj){
        if(err) console.log(err);
        res.render(baseRoute+'/pelicula');
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
