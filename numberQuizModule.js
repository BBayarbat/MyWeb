const { Console } = require("console");
var strQuiz = ["3, 1, 4, 1, 5", "1, 1, 2, 3, 5", "1, 4, 9, 16, 25","2, 3, 5, 7, 11","1, 2, 4, 8, 16"];
var intAnswers = [9, 8, 36, 13, 32];
exports.getNextQuestion = function (req,res,vals) {
    var questionId = 0;
    var score = 0;
    if(vals.questionId != 'undefined' && isNaN(vals.questionId) === false){
        questionId = vals.questionId;
        score = vals.score;
        if(intAnswers[questionId] === parseInt(vals.answer)){
            score++;
        }
        questionId++;
        if(questionId >= strQuiz.length){
            res.writeHead(200, {'Content-Type': 'text/html'});       
            res.write("<form action = 'http://localhost:8080/numberQuiz.js' method= 'get'>");
            res.write("<h1>The Number Quiz</h1>")
            res.write("<p>Your current score is <span name = 'score'>" + score + "</span>.</p>");
            res.write("<p>Your have completed the Number Quiz, with a score of <span name = 'score'>" + score + "</span> of 5</p>");           
            res.write("</form>");
            return res.end();
        }
    }

    res.writeHead(200, {'Content-Type': 'text/html'});       
    res.write("<form action = 'http://localhost:8080/numberQuiz.js' method= 'get'>");
    res.write("<h1>The Number Quiz</h1>")
    res.write("<p>Your current score is <span>" + score + "</span>.</p>");
    res.write("<p>Guess the next number in the sequence. </p>");
    res.write("<p>" + strQuiz[questionId] + "</p>");
    res.write("<p>Your answer: </p>");
    res.write("<input type='hidden' name = 'score' value='" + score + "'>");
    res.write("<input type='hidden' name = 'questionId' value='" + questionId + "'>");
    res.write("<input type='number' name = 'answer'>");
    res.write("<input type='submit'>");
    res.write("</form>");
    return res.end();
};