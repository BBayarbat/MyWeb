var fs = require('fs');

exports.readFile = function (req,res) {    
    fs.readFile('matches.html',function(err, data){
        if (err) {
            return console.error('error: ' + err.message);
        }  
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        return res.end();
    });
};

exports.search = function (req,res) {    
    fs.readFile('singles.txt',function(err, data){
        if (err) {
            return console.error('error: ' + err.message);
        }  

        
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        return res.end();
    });
};