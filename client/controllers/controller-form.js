   var name, description, address, lat, lon, phone, type, hours, img;

$(document).ready(function() {

    $("form").keypress(function(e) {
        if (e.which == 13) {
            return false;
        }
    });

    $('#send').on('click', function(e) {
        e.preventDefault();    
        getLatLong($("#direccion").val());
    });

    $('#cancel').on('click', function(e) {
        e.preventDefault();
        clearForm();
        $("#modal-form")[0].style.display = "none";
    });

    
});

function clearForm() {
    $("#alta-locales-form").find("input, textarea").val("");
};


function saveShop(latitud, longitud){
     name = $("#name").val();
        description = $("#comments").val();
        address = $("#direccion").val();
        lat = latitud;
        lon = longitud;
        phone = $("#telefono").val();
        type = $("#dropdown").val();
        hours = $("#horario").val();
        img = $("#file").val();

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

};
