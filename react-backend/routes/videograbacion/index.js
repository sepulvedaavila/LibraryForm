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

/*  POST OMDB Service */
router.get('/getMovie', function (req, res) {
  res.render('registroVideograbaciones');
});

// console.log(req.query.title);
// fetch('http://www.omdbapi.com/?t=' + req.query.title + '&apikey=82a4df75')
//   .then(results => {
//     return results.json();
//   }).then(data => {   

//     console.log(data.Response);
//           if(data.Response === 'False'){              
//               console.log("No existe la pelicula en la OMDB");
//               res.sendStatus(300);
//           }else{
//               console.log(data)
//               var xml = xmlbuilder.create({
//                   record: {
//                       datafield: {
//                           subfield: {
//                               '@tag': '998', 
//                               '#text': data.Title 
//                           }
//                       }
//                   }
//               });
//               console.log(xml);
//               // el modulo fs con el metodo writeFile solo acepta como segundo paramentro un Buffer y un string
//               // así que hay que convertir el xml a un string para que sea procesado.
//               xml = xml.toString({pretty:true});
              
//               fs.writeFile('public/xml/'+data.Title+'.xml', xml, function(err){
//                 if(err) console.log(err);
//                 console.log("archivo guardado");
//                 res.send(data);
//               });
            
//             }
//   }).catch( (err) => {
//       console.log(err);
//       res.send("Error: no se ha podido conectar con la API");
//   });

module.exports = router;
