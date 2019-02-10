$(document).ready(function(){
    $('#findFilm').click(function(){
        let titulo = $('#titulo').val();
        $.get('consulta/search'+titulo, function(res){
            var result = res.data;
            var titles = result.map(function(elem){
                var returnValue = {id:elem._id, title:elem.Title, year:elem.Year};
                return returnValue;
            });
            console.log(titles);
        });
    });
});