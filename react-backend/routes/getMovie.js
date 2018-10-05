var express = require('express');
var router = express.Router();


/*  GET OMDB Service */
router.get('/getMovie', function (req, res) {
    fetch('http://www.omdbapi.com/?t=' + req.query.title + '&apikey=82a4df75')
    .then(results => {
        return results.json();
    }).then(data => {
        console.log(data);
        res.send(data);
    });
});

module.exports = router;