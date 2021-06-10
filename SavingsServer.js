var express = require('express');
var app = express();
var cors = require('cors');
app.use(express.urlencoded({extended:false}));
app.use(cors());
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

var server = app.listen(5000,function(){
    console.log('Listening...');    
});
  
app.post('/', cors(), function(req, res, next) {
    var acntBody = req.body;
    transactions(req, res, acntBody);
});


 function transactions(req,res, acntBody) {
    var strQuery = "SELECT * FROM accounts WHERE 1=1";
    console.log(acntBody.user + " " + acntBody.account + " " + acntBody.amount + " " + acntBody.operation);
   /* <option>deposit</option>
                    <option>withdraw</option>
                    <option>balance</option>
                    <option>new</option>
                    */
    if(acntBody.operation === 'new'){
        strQuery = "insert into accounts(name, number, balance) values('" + acntBody.user+ "'," + acntBody.account+ "," + acntBody.amount+ ")";
        con.query(strQuery);
        res.end();
    } 
    if(acntBody.operation === 'deposit'){
        strQuery = "update accounts set balance = balance + " + acntBody.amount + " where number = " + acntBody.account;
        con.query(strQuery);
        res.send('Deposit');
    }                   
    if(acntBody.operation === 'withdraw'){
        strQuery = "update accounts set balance = balance - " + acntBody.amount + " where number = " + acntBody.account;
        con.query(strQuery);
        res.send('Deposit');
    }            
    if(acntBody.operation === 'balance'){
        strQuery = "SELECT balance FROM accounts where number = " + acntBody.account;
        con.query(strQuery, function(err, result, fields){
            if (err) {
                return console.error('error: ' + err.message);
            }  
            
            res.send("<p>The Current Balance is $" + result[0].balance + " </p>");  
        });
   }            
   console.log(strQuery);
};
