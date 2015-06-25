var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded ({ extended: false });

var blocks = {
  'Fixed' : 'Fastened securely in position',
  'Movable' : 'Capable of being moved',
  'Rotating' : 'Moving in a circle around its center'
};

router.route('/')
  .get(function (request, response){

  })
  .post(parseUrlencoded, function (request, response){

  });

router.route('/:name')
  .all(function(request, response, next){
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    request.blockName = block;
    next();
  })
  .get(function(request, response){

  })
  .delete(function(request, response){

  });

module.exports = router;
