var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('public'));

var blocks = require('./routes/blocks');
app.use('/blocks', blocks);

app.listen(3000, function (){
  console.log('running on port 3000');
});
