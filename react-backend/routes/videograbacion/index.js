const fetch = require('node-fetch');
var express = require('express');
var cors = require('cors');
var xmlbuilder = require('xmlbuilder');
var fs = require('fs');
var router = express.Router();

router.use(cors());

var baseRoute="/videograbaciones";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Videograbaciones' });
});

router.post('/',function(req, res){
  console.log(req.body);
  // var xml = xmlbuilder.create({
  //                     record: {
  //                         datafield: {
  //                             subfield: {
  //                                 '@tag': '998', 
  //                                 '#text': data.Title 
  //                             }
  //                         }
  //                     }
  //                 });
  // console.log(xml);
  // xml = xml.toString({pretty:true});

  // fs.writeFile('public/xml/'+req.body+'.xml', xml, function(err){
  //   if(err) console.log(err);
  //     console.log("archivo guardado");
  //   res.send(data);
  // });
  res.sendStatus(200);
});

/*  POST OMDB Service */
router.get('/getMovie', function (req, res) {
  res.render('registroVideograbaciones');
});
        

module.exports = router;
