function calc(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var result = num1;
    switch(operator){
        case "+": 
        result = num1 + num2;
        break;
        case "-":
            result = num1- num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1* num2;
            break;
        default: break;
    }
    document.getElementById("answer").innerText = result;
    alert("The answer is " + result);
}