var http = require('http');
var dt = require('./myModule');
http.createServer(function(req, res){
 res.writeHead(200,{'Content-Type': 'text/html'});
 res.write('<div><h4>The date and time currently: ' +dt.myDateTime() + '</h4></div>');
 res.write('<div>' + req.url + '</div>')
 res.end('<div><h1>Hello World</h1></div>');

}).listen(8080);