var win = true;
$(document).ready(function(){
    $("#maze .boundary").mouseover(red);
    $("#end").mouseover(end);
    $("#start").click(reset);
    $("#maze").mouseleave(red);
});

var reset = function (){
    $("#maze .boundary").removeClass("youlose");
    $("#status").text("Started!");
    win = true;
}
var red = function (){
    $("#maze .boundary").addClass("youlose");
    win = false;
    //alert("Sorry, You lose. :[");
    $("#status").text("Sorry, You lose. :[");
}

var end = function (){
    win = true;
    $("#status").text("You win! :]");
}