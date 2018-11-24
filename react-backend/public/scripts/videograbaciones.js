
    $(document).ready(function(){
        $('#findFilm').click(function(){
            $('#posterImg').hide();
            var titulo = $('#titulo').val();
            $.get('http://www.omdbapi.com/', {t:titulo, apikey:'82a4df75'}, function(data){
                console.log(data);
                if(data.hasOwnProperty('Error')){
                    swal(data.Error);
                } else {
                    $('#titulo').val(data.Title);
                    $('#nota_resumen').val(data.Plot);
                    $('#nota_premios1').val(data.Awards);
                    $('#nota_idioma').val(data.Language);
                    $("#posterImg").attr('src', data.Poster);
                    $('#posterImg').show();
                }
        });
    });

            $("#addGeneral").click(function(){
                $("#divNotaGeneral").append('<div><input class="short-inputs" name="nota_general1" type="text" placeholder="etiqueta"><input class= "short-inputs" name = "nota_general1" type = "text" placeholder = "Indice" ><input name="nota_general1" type="text" placeholder="Type something"><input type="button" value="-" class="remove"><br/></div>');
            });
            $("#addPremios").click(function () {
                $("#divNotaPremios").append('<div><input class="short-inputs" name="nota_premios1" type="text" placeholder="etiqueta"><input class= "short-inputs" name = "nota_premios1" type = "text" placeholder = "Indice" ><input name="nota_premios1" type="text" placeholder="Type something"><input type="button" value="-" class="remove"><br/></div>');
            });
            $("#createXML").click(function(){
                var inputValues = [];
                $('form input:text').each(function(){
                    inputValues.push($(this).val());
                });
                console.log(inputValues);
            });
        });
        $(document).on("click", ".remove", function () {
            $(this).parent().remove();
        });
