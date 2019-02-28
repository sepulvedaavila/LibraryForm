$(document).ready(function(){
    $('#crearRegistro').click(function(){
        let title = $('#title').html();
        let year = $('#year').html();
        let rated = $('#rated').html();
        let released = $('#released').html();
        let runtime = $('#runtime').html();
        let genre = $('#genre').html();
        let director = $('#director').html();
        let writer = $('#writer').html();
        let actors = $('#actors').html();
        let plot = $('#plot').html();
        let language = $('#language').html();
        let country = $('#country').html();
        let obj = {
            title: title, year:year,
            rated:rated, released:released,
            runtime:runtime, genre:genre,
            director:director, writer:writer,
            actors:actors, plot:plot,
            language:language, country:country
        };
        let objStr = JSON.stringify(obj);
        $.post('/videograbacion/creacionFormulario/',obj);
        
    });
});