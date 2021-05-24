var timer = null;
var frame =0;
var arrayAnim = null;
function btnStart(){
    if(timer == null)
        timer = setInterval(anim, 250);

    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}
function btnStop(){
    if(timer != null){
        clearInterval(timer);
        timer = null;
    }
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}

function anim(){
    var animText = document.getElementById("text").innerHTML;
    if(animText.length > 0) {
        if(arrayAnim == null){
            arrayAnim = animText.split("=====\n");
        }
        if(arrayAnim.length <= frame)
        {   
            frame = 0; 
        }
        document.getElementById("text").innerHTML = arrayAnim[frame];
        frame++;
    }
}

function onAnimChange(){
    var txt = document.getElementById("animation").value;
    var newTxtValue = "";
    switch(txt){
        case "black": newTxtValue = ""; break;
        case "exercise": newTxtValue = EXERCISE;break;
        case "juggler": newTxtValue = JUGGLER;break;
        case "bike": newTxtValue = BIKE;break;
        case "dive": newTxtValue = DIVE;break;
        default: break;
    }
    document.getElementById("text").innerHTML = newTxtValue;
    frame =0;
    arrayAnim = null;
}
//<!--Tiny (7pt), Small (10pt), Medium (12pt), Large (16pt), Extra Large (24pt), XXL (32pt)-->
function onFontChange(){
    var txt = document.getElementById("text");
    var fontCombo = document.getElementById("size").value;
    var fSize = "12pt";
    switch(fontCombo){
        case "tiny": fSize = "7pt"; break;
        case "small": fSize = "10pt";break;
        case "medium": fSize = "12pt";break;
        case "large": fSize = "16pt";break;
        case "xl": fSize = "24pt";break;
        case "xxl": fSize = "32pt";break;
    }
    
    txt.style.fontSize = fSize;
}

function onSpeedChange(){
    if(document.getElementById("turbo").checked){
        clearInterval(timer);
        timer = null;
        timer =setInterval (anim, 50);
    } else {
        clearInterval(timer);
        timer = null;
        timer =setInterval (anim, 250);
    }
}