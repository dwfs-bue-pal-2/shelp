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
    var shop = new FormData();
    shop.append('name', $("#name").val());
    shop.append('addres', $("#direccion").val());
    shop.append('lat', $("#lat").val());
    shop.append('lon', $("#lon").val());
    shop.append('phone', $("#telefono").val());
    shop.append('hours', $("#horario").val());
    shop.append('shopImage', $("#file").val());

    var settings = {
        "url": "http://localhost:3000/locales",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
    // $.post(server, shop, (data, status) => {
    //     console.log(`Status: ${status}`);
    //     if (status === 'success') {
    //         alert(`El local ${name} fue dado de alta con exito!`);
    //         clearForm();
    //     }
    // });     
};
