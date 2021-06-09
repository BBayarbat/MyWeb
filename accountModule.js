var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'server',
    database: 'bank'
});

con.connect(function(err){
    if (err) {
        return console.error('error: ' + err.message);
      }
    console.log('Connected...');    
});

exports.search = function (req,res, acntBody) {
    var strQuery = "SELECT * FROM accounts WHERE 1=1";
    //console.log(acntBody.name + " " + acntBody.number + " " + acntBody.min + " " + acntBody.max);
    if(acntBody.name)
        strQuery += " AND name like '" + acntBody.name + "%'";
    
    if(acntBody.number)
        strQuery += " AND number =" + acntBody.number + "";

    if(acntBody.min)
        strQuery += " AND balance >= " + acntBody.min;

    if(acntBody.max)
        strQuery += " AND balance <= " + acntBody.max;
    
    con.query(strQuery, function(err, result, fields){
        if (err) {
            return console.error('error: ' + err.message);
        }  
        
        res.send(result);  
    });
};

exports.findByNumber = function (req,res, number) {
    var strQuery = "SELECT * FROM accounts WHERE 1=1";
    
    if(number)
        strQuery += " AND number =" + number + "";
    
    con.query(strQuery, function(err, result, fields){
        if (err) {
            return console.error('error: ' + err.message);
        }  
        
        res.send(result);  
    });
};
