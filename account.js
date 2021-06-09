$(document).ready(function() {
    $("#loader").hide();
    $(document).ajaxStart(function(){$("#loader").show();})
               .ajaxStop(function(){$("#loader").hide();});
    $("#findByNumber").click(function(){
        var number = $("input[name='number']").val();
        $.ajax({
            headers: { "Accept": "application/json"},
            url: "http://localhost:8080/findByNumber",
            type: "POST",
            data: {'number': number},
            success: ajaxSuccess,
            error: ajaxFailure
        });
    });
    $("#lookUp").click(function(){
        var name = $("input[name='name']").val();
        var number = $("input[name='number']").val();
        var min = $("input[name='min']").val();
        var max = $("input[name='max']").val();

        $.ajax({
            headers: { "Accept": "application/json"},
            url: "http://localhost:8080/accountNode",
            type: "POST",
            data: {"name":name, 'number': number, 'min': min, 'max': max},
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
    if(data.length > 0){ 
        resultHTML = "<table><tr><th></th><th>Name</th><th>Number</th><th>Balance</th></tr>";
        for(let i=0;i<data.length;i++){        
            resultHTML = resultHTML + "<tr><td>" + (i+1) + "</td><td>" + data[i].name + "</td><td>" + data[i].number + "</td><td>" + data[i].balance + "</td></tr>";
        }
        resultHTML += "</table>";
    } else {
        resultHTML = "<div><p>Not found</p></div>";
    }
    $("#content").append(resultHTML);
}

function ajaxFailure(xhr, status, exception){
    console.log(xhr, status, exception);
}