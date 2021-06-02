var garray = [];
var init = function() {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
    garray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];  
    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = divs[i];
        
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("images/background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        
        // store x and y for later
        div.x = x;
        div.y = y; 
        
    }   
};

$(document).ready(function(){
    init();
    markAvailSlot();
   /* $(".puzzlepiece").hover(function(){
        $(this)
    });*/
    $("#shufflebutton").click(function(){
        random();
        markAvailSlot();
    })

    $("div.puzzlepiece").each(function(i){
        $(this).click(function(){
            moveToAvailSlot(i+1);
            markAvailSlot();
        });
        
    });
});

var random = function() {
    garray = shuffle(garray);
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
    // initialize each piece

    for (var i=0; i< divs.length; i++) {
        var div = divs[i];
        
        // calculate x and y for this piece
        var x = (((garray[i]-1) % 4) * 100) ;
        var y = (Math.floor((garray[i]-1) / 4) * 100) ;
        
        var tx = ((i % 4) * 100) ;
        var ty = (Math.floor(i / 4) * 100) ;
        // set basic style and background
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundPosition = -tx + 'px ' + (-ty) + 'px';
        // store x and y for later
        div.x = x;
        div.y = y; 
    }        
};

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };
  function findPost(pvalue){
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
    for (var i=0; i< garray.length; i++) {
        if(garray[i] === pvalue){
            return i+1;
        } 
    }
  };
  function moveToAvailSlot(idx){
    var emptySlotIndex = garray[15];
    let idxx = findPost(idx)-1;
    
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");

    var x = (((emptySlotIndex-1) % 4) * 100) ;
    var y = (Math.floor((emptySlotIndex-1) / 4) * 100) ;
    var div = divs[findPost(idx)-1];
    var tx = ((idx % 4) * 100) ;
    var ty = (Math.floor(idx / 4) * 100) ;
    // set basic style and background
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.backgroundPosition = -tx + 'px ' + (-ty) + 'px';
    // store x and y for later
    div.x = x;
    div.y = y; 
    garray[15] = garray[idxx];
    garray[idxx] = emptySlotIndex;
  }
  function markAvailSlot(){
    var emptyIndex = garray[15]; //
   
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
    for (var i=1; i<= divs.length; i++) {
        $("#div" + i).removeClass("movablepiece"); 
    }
    switch(emptyIndex){
        case 16: 
            $("#div" + findPost(15)).addClass("movablepiece"); 
            $("#div" + findPost(12)).addClass("movablepiece"); 
        break;
        case 15: 
            $("#div" + findPost(11)).addClass("movablepiece"); 
            $("#div" + findPost(14)).addClass("movablepiece");  
            $("#div" + findPost(16)).addClass("movablepiece");  
        break;
        case 14: 
            $("#div" + findPost(13)).addClass("movablepiece"); 
            $("#div" + findPost(15)).addClass("movablepiece");  
            $("#div" + findPost(10)).addClass("movablepiece");  
        break;
        case 13: 
            $("#div" + findPost(14)).addClass("movablepiece"); 
            $("#div" + findPost(9)).addClass("movablepiece");  
        break;

        case 12: 
            $("#div" + findPost(8)).addClass("movablepiece"); 
            $("#div" + findPost(11)).addClass("movablepiece"); 
            $("#div" + findPost(16)).addClass("movablepiece"); 
        break;
        case 11: 
            $("#div" + findPost(7)).addClass("movablepiece"); 
            $("#div" + findPost(10)).addClass("movablepiece");  
            $("#div" + findPost(12)).addClass("movablepiece");  
            $("#div" + findPost(15)).addClass("movablepiece");  
        break;
        case 10: 
            $("#div" + findPost(6)).addClass("movablepiece"); 
            $("#div" + findPost(9)).addClass("movablepiece");  
            $("#div" + findPost(11)).addClass("movablepiece");  
            $("#div" + findPost(14)).addClass("movablepiece");  
        break;
        case 9: 
            $("#div" + findPost(5)).addClass("movablepiece"); 
            $("#div" + findPost(10)).addClass("movablepiece");  
            $("#div" + findPost(13)).addClass("movablepiece");
        break;

        case 8: 
            $("#div" + findPost(4)).addClass("movablepiece"); 
            $("#div" + findPost(7)).addClass("movablepiece"); 
            $("#div" + findPost(12)).addClass("movablepiece"); 
        break;
        case 7: 
            $("#div" + findPost(3)).addClass("movablepiece"); 
            $("#div" + findPost(6)).addClass("movablepiece");  
            $("#div" + findPost(8)).addClass("movablepiece");  
            $("#div" + findPost(11)).addClass("movablepiece"); 
        break;
        case 6: 
            $("#div" + findPost(2)).addClass("movablepiece"); 
            $("#div" + findPost(5)).addClass("movablepiece");  
            $("#div" + findPost(7)).addClass("movablepiece");  
            $("#div" + findPost(10)).addClass("movablepiece");  
        break;
        case 5: 
            $("#div" + findPost(1)).addClass("movablepiece"); 
            $("#div" + findPost(6)).addClass("movablepiece");  
            $("#div" + findPost(9)).addClass("movablepiece");  
        break;

        case 4: 
            $("#div" + findPost(8)).addClass("movablepiece"); 
            $("#div" + findPost(3)).addClass("movablepiece"); 
        break;
        case 3: 
            $("#div" + findPost(7)).addClass("movablepiece"); 
            $("#div" + findPost(2)).addClass("movablepiece");  
            $("#div" + findPost(4)).addClass("movablepiece");  
        break;
        case 2: 
            $("#div" + findPost(6)).addClass("movablepiece"); 
            $("#div" + findPost(3)).addClass("movablepiece");  
            $("#div" + findPost(1)).addClass("movablepiece");  
        break;
        case 1: 
            $("#div" + findPost(5)).addClass("movablepiece"); 
            $("#div" + findPost(2)).addClass("movablepiece");  
        break;
    }    
  };