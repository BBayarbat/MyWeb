var timer = null;
function onClickTimer(){
    if(timer == null)
        timer = setInterval(bigger,500);    
    else{
        clearInterval(timer);
        timer = null;
    }
}
function bigger() {
    var txt = document.getElementById("text");
    if(txt.style.fontSize != "")
        var fsize = parseInt(txt.style.fontSize);
    else
        var fsize = 12;
    fsize += 2;
    txt.style.fontSize = fsize + "pt";    
}
function bling(){
    var txt = document.getElementById("text");
    var chk = document.getElementById("bling");
    if(chk.checked === true){
        txt.style.fontWeight = "bold";
        txt.style.color = "green";
        txt.style.textDecorationLine="underline";
        document.body.style.backgroundImage = "URL('images/silverware.jpg')";
    }
    else{
        txt.style.fontWeight = "normal";
        txt.style.color = "black";
        txt.style.textDecoration="none";
    }
}
function pigLatin(){
    var txt = document.getElementById("text");
    var value = txt.innerHTML;
    if(value.charAt(0) == 'S') 
        value = '-ay' + value.substring(1,value.length-1) + value.substring(0,1);
    else
        value = value + '-ay';

    txt.innerHTML = value;
}

function malkovich(){
    var txt = document.getElementById("text");
    var value = txt.innerHTML;
    var strArray = value.split(' ');
    for(var i=0 ; i< strArray.length; i++) {
        if(strArray[i].length >= 5){
            strArray[i] = "Malkovich";
        }
    }
    value = strArray.join(' ');

    txt.innerHTML = value;
}