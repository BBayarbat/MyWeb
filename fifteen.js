var a = []; 
$(document).ready(function(){
    a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];  
    init();    

    $("#shufflebutton").click(function(){
        shuffle();
    })

    $("div.puzzlepiece").each(function(i){

        $(this).click(function(){
            if($(this).hasClass('movablepiece')){
                moveToAvailSlot(i);
            }
        });        
    });
});

var init = function() {
    var divs = $("div#puzzlearea").children();

    for (var i=0; i< a.length; i++) {
        if(a[i] != 16){
            var div = divs.eq(a[i]-1);
            
            let x = (((a[i]-1) % 4) * 100) ;
            let y = (Math.floor((a[i]-1) / 4) * 100) ;
            let ix = ((i % 4) * 100) ;
            let iy = (Math.floor(i / 4) * 100) ;

            div.addClass("puzzlepiece");
            div.css("left", ix + 'px');
            div.css("top", iy + 'px');
            div.css("backgroundImage", 'url("images/background.jpg")');
            div.css("backgroundPosition", -x + 'px ' + (-y) + 'px');
            
            div.x = ix;
            div.y = iy;     
        }    
    }   
    markAvailSlot();
};

var shuffle = function() {
    a = mixArray(a);
    init();       
};

function moveToAvailSlot(idx){
    let availIdx = findPost(16)-1; 
    let clickedIdx = findPost(idx+1)-1;
    
    temp = a[availIdx];
    a[availIdx] = a[clickedIdx];
    a[clickedIdx] = temp;
    
    init();
};

function mixArray(array) {
    var currentIndex = array.length,  randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
};
function findPost(pvalue){
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
    for (var i=0; i< a.length; i++) {
        if(a[i] === pvalue){
            return i+1;
        } 
}
};

  function markAvailSlot(){
    var emptyIndex = findPost(16); //
   
    var divs = $("div#puzzlearea").children();
    
    for (var i=0; i< divs.length; i++) {
        divs.eq(i).removeClass("movablepiece"); 
    }

    switch(emptyIndex){
        case 16: 
            divs.eq(a[14]-1).addClass("movablepiece"); 
            divs.eq(a[11]-1).addClass("movablepiece"); 
        break;
        case 15: 
            divs.eq(a[10]-1).addClass("movablepiece"); 
            divs.eq(a[13]-1).addClass("movablepiece"); 
            divs.eq(a[15]-1).addClass("movablepiece");   
        break;
        case 14: 
            divs.eq(a[12]-1).addClass("movablepiece"); 
            divs.eq(a[14]-1).addClass("movablepiece"); 
            divs.eq(a[9]-1).addClass("movablepiece");  
        break;
        case 13: 
            divs.eq(a[13]-1).addClass("movablepiece"); 
            divs.eq(a[8]-1).addClass("movablepiece");    
        break;

        case 12: 
            divs.eq(a[7]-1).addClass("movablepiece"); 
            divs.eq(a[10]-1).addClass("movablepiece"); 
            divs.eq(a[15]-1).addClass("movablepiece"); 
        break;
        case 11: 
            divs.eq(a[6]-1).addClass("movablepiece"); 
            divs.eq(a[9]-1).addClass("movablepiece"); 
            divs.eq(a[11]-1).addClass("movablepiece"); 
            divs.eq(a[14]-1).addClass("movablepiece");  
        break;
        case 10: 
            divs.eq(a[5]-1).addClass("movablepiece"); 
            divs.eq(a[8]-1).addClass("movablepiece"); 
            divs.eq(a[10]-1).addClass("movablepiece"); 
            divs.eq(a[13]-1).addClass("movablepiece");  
        break;
        case 9: 
            divs.eq(a[4]-1).addClass("movablepiece"); 
            divs.eq(a[9]-1).addClass("movablepiece"); 
            divs.eq(a[12]-1).addClass("movablepiece"); 
        break;

        case 8: 
            divs.eq(a[3]-1).addClass("movablepiece"); 
            divs.eq(a[6]-1).addClass("movablepiece"); 
            divs.eq(a[11]-1).addClass("movablepiece"); 
        break;
        case 7:  
            divs.eq(a[2]-1).addClass("movablepiece"); 
            divs.eq(a[5]-1).addClass("movablepiece"); 
            divs.eq(a[7]-1).addClass("movablepiece"); 
            divs.eq(a[10]-1).addClass("movablepiece"); 
        break;
        case 6: 
            divs.eq(a[1]-1).addClass("movablepiece"); 
            divs.eq(a[4]-1).addClass("movablepiece"); 
            divs.eq(a[6]-1).addClass("movablepiece"); 
            divs.eq(a[9]-1).addClass("movablepiece"); 
        break;
        case 5: 
            divs.eq(a[0]-1).addClass("movablepiece"); 
            divs.eq(a[5]-1).addClass("movablepiece"); 
            divs.eq(a[8]-1).addClass("movablepiece");
        break;

        case 4: 
            divs.eq(a[7]-1).addClass("movablepiece"); 
            divs.eq(a[2]-1).addClass("movablepiece");
        break;
        case 3:  
            divs.eq(a[6]-1).addClass("movablepiece"); 
            divs.eq(a[1]-1).addClass("movablepiece"); 
            divs.eq(a[3]-1).addClass("movablepiece");
        break;
        case 2: 
            divs.eq(a[5]-1).addClass("movablepiece"); 
            divs.eq(a[2]-1).addClass("movablepiece"); 
            divs.eq(a[0]-1).addClass("movablepiece"); 
        break;
        case 1: 
            divs.eq(a[4]-1).addClass("movablepiece"); 
            divs.eq(a[1]-1).addClass("movablepiece");   
        break;
    }   
  };