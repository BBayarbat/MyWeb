var express = require('express');
var app = express();
var cors = require('cors');
var acntMod = require('./accountModule');
app.use(express.urlencoded({extended:false}));
app.use(cors());

var server = app.listen(8080,function(){
    console.log('Listening...');    
});
  
app.get('/', cors(), function(req, res, next) {
    res.json('Hello World Account');
});

app.post('/findByNumber', cors(), function(req, res, next) {
    var number = req.body.number;
    acntMod.findByNumber(req, res, number);
});

app.post('/accountNode', cors(), function(req, res, next) {
    var acntBody = req.body;
    acntMod.search(req, res, acntBody);
});

