
    $(document).ready(function(){
        $('#titulo').keypress(function(){
            var titulo = $('#titulo').val();
            $.get('http://www.omdbapi.com/', { s: titulo, apikey: '82a4df75' }, function (data) {
                if (!data.hasOwnProperty('Error')) {
                    var availableTags = [];
                    data = data['Search'];
                    data.forEach(element => {
                        availableTags.push(element.Title);
                        //availableTags.push(element.Title+" ("+element.Year+")");
                    });
                    //console.log(availableTags);
                    $("#titulo").autocomplete({
                        source: availableTags
                    });
                }
            });    
        });
        var objectoRespuesta = {};
        $('#findFilm').click(function(){
            $('#posterImg').hide();
            var titulo = $('#titulo').val();
            $.get('http://www.omdbapi.com/', {t:titulo, apikey:'82a4df75'}, function(data){
                console.log(data);                
                if(data.hasOwnProperty('Error')){
                    $('input').val('');
                    swal({type: 'error',
                        title: 'Error en API',
                        text: 'La pélicula que estas buscando no se encuentra en la API, verifica el titulo'
                    });
                } else {
                    objectoRespuesta = data;
                    $('#titulo').val(data.Title);
                    $('#nota_resumen').val(data.Plot);
                    $('#nota_premios1').val(data.Awards);
                    $('#nota_idioma').val(data.Language);
                    $('#nota_autor_personal').val(data.Director);
                    $("#posterImg").attr('src', data.Poster);
                    $('#posterImg').show();
                }
            });
        });
            $("#addGeneral").click(function(){
                $("#divNotaGeneral")
                .append('<div="row-labels-and-inputs">'+
                            '<div class="row">'+
                                '<div class="input-group input-group-sm mb-3">'+
                                    '<div class="input-group-prepend col-md-2">'+
                                        '<span>Nota General</span>'+
                                    '</div>'+
                                    '<label class="col-md-1 mr-2" name="nota_general1" type="text">490/500</label>'+
                                    '<input class="form-control col-md-1 mr-2" name="nota_premios1" type="text" placeholder="etiqueta">'+
                                    '<input class="form-control col-md-1 mr-2" name = "nota_premios1" type = "text" placeholder = "Indice" >'+
                                    '<input class="form-control col-md-6" name="nota_premios1" type="text" placeholder="Type something">'+
                                    '<input class="fa fa-minus btn btn-light remove" type="button">'+
                                '</div>'+
                            '</div>'+
                        '<br/></div>');
            });
            $("#addPremios").click(function(){
                $("#divNotaPremios")
                .append('<div="row-labels-and-inputs">'+
                            '<div class="row">'+
                                '<div class="input-group input-group-sm mb-3">'+
                                    '<div class="input-group-prepend col-md-2">'+
                                        '<span>Nota de Premios</span>'+
                                    '</div>'+
                                    '<label class="col-md-1 mr-2" name="nota_general1" type="text">586</label>'+
                                    '<input class="form-control col-md-1 mr-2" name="nota_premios1" type="text" placeholder="etiqueta">'+
                                    '<input class="form-control col-md-1 mr-2" name = "nota_premios1" type = "text" placeholder = "Indice" >'+
                                    '<input class="form-control col-md-6" name="nota_premios1" type="text" placeholder="Type something">'+
                                    '<input class="fa fa-minus btn btn-light remove" type="button">'+
                                '</div>'+
                            '</div>'+
                        '<br/></div>');
            });
            $("#createXML").click(function(){
                // var inputValues = [];
                var dataForm = new FormData();
                
                dataForm.append('titulo',$('#titulo').val());
                dataForm.append('notw_resumen',$('#nota_resumen').val());
                dataForm.append('nota_premios1',$('#nota_premios1').val());
                dataForm.append('nota_idioma',$('#nota_idioma').val());
                dataForm.append('nota_autor_personal',$('#nota_autor_personal').val());
                dataForm.append('posterImg',$("#posterImg").attr('src'));
                
                for(elem in objectoRespuesta){
                    console.log(elem+' : '+objectoRespuesta[elem])
                }
                // var form = $('form input:text').each(function(){
                //     inputValues.push($(this).val());
                // });
                
                for (var pair of dataForm.entries()) {
                    console.log(pair[0]+ ', ' + pair[1]); 
                }

                    $.ajax({
                        type: "POST",
                        url: 'videograbacion/',
                        contentType: false,
                        processData: false,
                        data: dataForm,
                        success: () => {
                            console.log("success");
                            swal(
                                "XML",
                                "Se ha generado tu archivo de forma correcta",
                                'success'
                            );
                        },
                        error: () => {
                            console.log("error");
                            swal(
                                "Ups",
                                "Lo sentimos ocurrio un error",
                                'error'
                            );
                        },
                        done: () => {
                            $.ajax({
                                type: "POST",
                                url: 'videograbacion/save',
                                contentType: false,
                                processData: false,
                                data: objectoRespuesta,
                                success: () => {
                                    console.log("Objeto guardado");
                                },
                                error: ()=>{
                                    console.log("error");
                                }
                            })
                        }               
                    });
                
                
            });
        });
        $(document).on("click", ".remove", function () {
            $(this).parent().remove();
        });




