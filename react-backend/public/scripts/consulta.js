$(document).ready(function(){
    $('#findFilm').click(function(){
        let titulo = $('#titulo').val();
        $.get('consulta/search'+titulo, function(data){
            console.log(data.data);
        });
    });
});