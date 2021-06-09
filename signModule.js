var fs = require('fs');

exports.sign = function (req,res, member) {    
    let textStr = member.name + ',' + (member.gender == 'female' ? 'F': 'M') + ',' 
               + member.age + ',' +  member.ptype+ ',' +   member.os+ ',' 
               + member.min + ',' +  member.max + '\n';    console.log(textStr);
    fs.appendFile("singles.txt",textStr, function(err){
        if (err) {
            return console.error('error: ' + err.message);
        }  
        
        console.log('Saved (' +member.name+ ')');
        res.send("<div><h1>Thank you!</h1></div><div><p>Welcome to NerdLuv, <strong>" + member.name + 
        "</strong></p><p>Now <a href='http://localhost:8080/matches.js'>log in to see your matches!</a></p></div>");  
    });
};

