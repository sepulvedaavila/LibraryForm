const fetch = require('node-fetch');
var express = require('express');
var cors = require('cors');
var xmlbuilder = require('xmlbuilder');
var fs = require('fs');
var modelPeliculas = require('../../models/peliculas');
var formidable = require('formidable');
var mongoose = require('mongoose');
var router = express.Router();

router.use(cors());

var baseRoute="/videograbaciones";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Videograbaciones' });
});

router.post('/',function(req, res){
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {

    var xml = xmlbuilder.create({
                        record: {
                            datafield: {
                                subfield: {
                                    '@tag': '998', 
                                    '#text': fields.titulo  
                                }
                            }
                        }
                    });
    // console.log(xml);
    xml = xml.toString({pretty:true});
    fs.writeFile('public/xml/'+fields.titulo+'.xml', xml, function(err){
      if(err) console.log(err);
      res.sendStatus(200);
      console.log("archivo guardado");
    });
  });
});

router.post('/save',function(req, res){
  modelPeliculas.find({},(err,data)=>{
    if(err) console.log(err)
    else{
      console.log(data);
      var movie = new modelPeliculas({
        _id: new mongoose.Types.ObjectId,
        Title: req.body.Title,
        Year: req.body.Year,
        Rated: req.body.Rated,
        Released: req.body.Released,
        Runtime: req.body.Runtime,
        Genre: req.body.Genre,
        Director: req.body.Director,
        Writer: req.body.Writer,
        Actors: req.body.Actors,
        Plot: req.body.Plot,
        Language: req.body.Language,
        Country: req.body.Country,
        Awards: req.body.Awards,
        Poster:req.body.Poster,
        Ratings:req.body.Ratings,
        Metascore: req.body.Metascore,
        imdbRating: req.body.imdbRating,
        imdbVotes: req.body.imdbVotes,
        imdbID: req.body.imdbID,
        Type: req.body.Type,
        DVD: req.body.DVD,
        BoxOffice: req.body.BoxOffice,
        Production: req.body.Production,
        Website: req.body.Website,
        Response: req.body.Response 
      });
      movie.save((err, data)=>{
        if(err){
          console.log(err);
          console.log(data);
        }else{
          console.log(data);
          res.sendStatus(200);
        }
      });
    }
  }); 
})

/*  POST OMDB Service */
router.get('/getMovie', function (req, res) {
  res.render('registroVideograbaciones');
});
        

module.exports = router;
