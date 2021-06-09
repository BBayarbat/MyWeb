$(document).ready(function(){
    $("#submit").click(function(){
        let name = $("input[name='name']").val();
        let gender = $("input[name='gender']:checked").val();
        let age = $("input[name='age']").val();
        let ptype = $("input[name='ptype']").val();
        let os = $("#os option:selected").val();
        let min = $("input[name='min']").val();
        let max = $("input[name='max']").val();
                                      
        $.ajax('http://localhost:8080/signup-submit.js',{
            type: 'POST',
            headers: { "Accept": "application/json"},
            data: {'name': name, 'gender': gender, 'age': age, 'ptype': ptype, 'os': os, 'min': min, 'max': max},
            beforeSend: function(xhr){
                xhr.withCredentials = true;
            },
            success: function (data) {
                if(data){
                    $("#content").empty();
                    $("#content").append(data);
                }
            },
            error: function () {
                alert();
            },
        });
    });
});