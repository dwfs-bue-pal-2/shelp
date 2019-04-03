   var resultado = '';

$(document).ready(function() {

 

    $("form").keypress(function(e) {
        if (e.which == 13) {
            return false;
        }
    });

    $('#send').on('click', function(e) {
        e.preventDefault();
        

       
        var name = $("#name").val();
        var description = $("#comments").val();
        var address = $("#direccion").val();
        var lat = $("#direccion").data('lat');
        var lon = $("#direccion").data('lon');
        var phone = $("#telefono").val();
        var type = $("#dropdown").val();
        var hours = $("#horario").val();
        var img = $("#file").val();

        
        console.log("obtener lat y long " + getLatLong(address));
    
      

/*

        if (name && description && address && type && phone && hours && lat ) {

            $.post("http://localhost:3000/locales", {
                    name: name,
                    description: description,
                    address: address,
                    lat: lat,
                    lon: lon,
                    phone: phone,
                    type: type,
                    hours: hours,
                    img: img
                },
                function(data, status) {

                    console.log(" Status: " + status);
                    if (status == 'success') {
                        alert('El local ' + name + ' fue dado de alta con exito!');
                        clearForm();
                    }
                });
        } else {
            alert('Debe completar todos los campos');
        }
*/
    });

    $('#cancel').on('click', function(e) {
        e.preventDefault();
        clearForm();
        $("#modal-form")[0].style.display = "none";
    });

    function clearForm() {
        $("#alta-locales-form").find("input, textarea").val("");
    };
});



