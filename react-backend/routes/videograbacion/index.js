const fetch = require('node-fetch');
var express = require('express');
var cors = require('cors');
var xmlbuilder = require('xmlbuilder');
var fs = require('fs');
var formidable = require('formidable');
var router = express.Router();

router.use(cors());

var baseRoute="/videograbaciones";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Videograbaciones' });
});

router.post('/',function(req, res){
  console.log('hello');
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
    console.log(xml);
    xml = xml.toString({pretty:true});
    fs.writeFile('public/xml/'+fields.titulo+'.xml', xml, function(err){
      if(err) console.log(err);
      res.sendStatus(200);
      console.log("archivo guardado");        
    });
  });
});

/*  POST OMDB Service */
router.get('/getMovie', function (req, res) {
  res.render('registroVideograbaciones');
});
        

module.exports = router;
