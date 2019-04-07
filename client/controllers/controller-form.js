const server = "http://localhost:3000/locales";

$(document).ready(function () {
    $("form").keypress((e) => {
        if (e.which === 13){
            return false;
        }
    });

    $('#send').on('click',(e) => {
        e.preventDefault();
        getLatLong($("#direccion").val());
    });

    $('#cancel').on('click', (e) => { 
        e.preventDefault();
        clearForm();
        $("#modal-form")[0].style.display = "none";
    });


});

function clearForm() {
    $("#alta-locales-form").find("input, textarea").val("");
};

function saveShop(lat, lon) {
    let shop = {
        name: $("#name").val(),
        desc: $("#comments").val(),
        address: $("#direccion").val(),
        lat: lat,
        lon: lon,
        phone: $("#telefono").val(),
        type: $("#dropdown").val(),
        hours: $("#horario").val(),
        img: $("#file").val()
    }

    $.post(server, {
        name: shop.name,
        description: shop.desc,
        address: shop.address,
        lat: shop.lat,
        lon: shop.lon,
        phone: shop.phone,
        type: shop.type,
        hours: shop.hours,
        img: shop.img
    }, (data, status) => {
        console.log(`Status: ${status}`);
        if (status === 'success') {
            alert(`El local ${name} fue dado de alta con exito!`);
            clearForm();
        }
    });     
};
