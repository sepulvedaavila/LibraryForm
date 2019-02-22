$(document).ready(function(){
    $('#tablaConsulta').DataTable({
        "processing": true,
        "ajax": {
            url: "consulta/search",
            "type": "GET",
            dataSrc: function (json) {
                var obj = json.data;
                return obj;
            }
        },
        "columns": [{
            "title":"Title",
            "data": "Title"
        }, {
            "title": "Year",
            "data": "Year"
        }, {
            "title": "Director",
            "data": "Director"
        }, {
            "title": "Details",
            "data": "_id",
            "render": function(data, type, row, meta) {
                return '<a id='+data+' class="btn btn-primary"><i class="fa fa-eye"></a>';
            }                
        }]        
    });
    $('#tablaConsulta').on('click','tbody tr td a',function(){        
        var id = $(this).attr('id');
        $.ajax({
            method:"POST",
            url: "consulta/pelicula"+id,        
            success: (pelicula) => {
                swal({
                    icon:'success',
                    title: "good",
                    text: JSON.stringify(pelicula.pelicula.Title)}
                    ).then(
                        window.location.href = "consulta/pelicula/"+id+""
                    );
            },
            error: () => {
                swal({
                    icon:"error",
                    title:"error",
                    text:"error"
                });
            }

        });

    });    
});