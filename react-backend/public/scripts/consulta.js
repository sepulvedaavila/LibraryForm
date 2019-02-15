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
            "data": null,
            "defaultContent": "<button><i class='fa-eye'></button>"

        }]
    });
});