var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var wordMod = require('./word');
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

var server = app.listen(8080,function(){
    console.log('Listening...');    
});
  
app.get('/', cors(), function(req, res, next) {
    res.json('Hello World');
});
  
app.post('/dictionary', cors(), function(req, res, next) {
    var word = req.body.word;
    wordMod.search(req, res, word);
});