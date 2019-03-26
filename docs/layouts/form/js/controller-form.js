$(document).ready(function() {


	$('#send').on('click', function(e) {
        e.preventDefault();

        var name = $("#name").val();
        var comments = $("#comments").val();
        var address = $("#direccion").val();
        var typeFood = $("#dropdown").val();
        var hours = $("#horario").val();

        console.log('nombre ' + name);
        console.log('comments ' + comments);
        console.log('direccion ' + address);
        console.log('dropdown ' + typeFood);
        console.log('horario ' + hours);
        
        
        /*$.post("/locales", { name: name },
            function(status) {
                console.log(status);
            });
        */

    });


});