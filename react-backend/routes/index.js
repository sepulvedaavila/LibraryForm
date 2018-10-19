const fetch = require('node-fetch');
var express = require('express');
var cors = require('cors');
var router = express.Router();

router.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*  POST OMDB Service */
router.POST('/getMovie', function (req, res) {
  // Papaw los campos de los POST se acceden con req.query.CAMPO
  fetch('http://www.omdbapi.com/?t=' + req.query.title + '&apikey=82a4df75')
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      // Aqui crear XML y guardarlo en Server
      res.send(data);
    });
});

module.exports = router;
