$(document).ready(function() {
    $("#loader").hide();
    $(document).ajaxStart(function(){$("#loader").show();})
               .ajaxStop(function(){$("#loader").hide();});

    $("#lookUp").click(function(){
        var word = $("input[name='word']").val();
        $.ajax({
            headers: { "Accept": "application/json"},
            url: "http://localhost:8080/dictionary",
            type: "POST",
            data: {"word":word},
            beforeSend: function(xhr){
                xhr.withCredentials = true;
            },
            success: ajaxSuccess,
            error: ajaxFailure
        });
        /*$.ajax("http://localhost:8080/dictionary.js", {
            "type": "GET",
            "data": {"word":word},
            "success": ajaxSuccess,
            "error": ajaxFailure
        });
        $.ajax("http://localhost:8080/dictionary.js", {
            "type": "GET",
            "data": {"word":word},
        }).done(ajaxSuccess).fail(ajaxFailure);
        */
    });
});

function ajaxSuccess(data){
    $('#content').empty();
    var resultHTML="";
    for(let i=0;i<data.length;i++){        
        resultHTML = resultHTML + "<div><p>" + (i+1) + "(" + data[i].wordtype + ") " + data[i].definition + "</p></div>";
    }
    if(resultHTML===""){
        resultHTML = "<div><p>Not found</p></div>";
    }
    $("#content").append(resultHTML);
}

function ajaxFailure(xhr, status, exception){
    console.log(xhr, status, exception);
}