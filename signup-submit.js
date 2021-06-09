var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var signMod = require('./signModule.js')
var matchesMod = require('./matches.js')
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

var server = app.listen(8080, function(){
	console.log('listening...')
})

app.get('/', cors(), function(req, res, next) {
	res.json('Hello Solongo')
})
  
app.post('/signup-submit.js', cors(), function(req, res, next) {
	var member = req.body;
    signMod.sign(req, res, member);
})
app.post('/matches.js', cors(), function(req, res, next) {
	matchesMod.readFile(req, res);
})  
app.post('/matches-submit.js', cors(), function(req, res, next) {
	matchesMod.readFile(req, res);
})  