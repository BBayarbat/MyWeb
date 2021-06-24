var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'server',
    database: 'entries'
});

con.connect(function(err){
    if (err) {
        return console.error('error: ' + err.message);
      }
    console.log('Connected...');    
});

exports.search = function (req,res, paramWord) {
    var word = paramWord;
    con.query("SELECT * FROM entries WHERE word = '" + word + "'", function(err, result, fields){
        if (err) {
            return console.error('error: ' + err.message);
        }  
        
        console.log('query running (' +word+ ')');
        res.send(result);  
    });
};

