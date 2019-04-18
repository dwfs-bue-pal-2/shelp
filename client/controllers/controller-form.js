const server = "http://localhost:3000/locales";

$(document).ready(function() {
  getShopList(markShops);

  $("form").keypress(e => {
    if (e.which === 13) {
      return false;
    }
  });

  $("#send").on("click", e => {
    e.preventDefault();
    getLatLong($("#direccion").val());
    $("#modal-form")[0].style.display = "none";
  });

  $("#cancel").on("click", e => {
    e.preventDefault();
    clearForm();
    $("#modal-form")[0].style.display = "none";
  });

  $("#show-list").on("click", e => {
    getShops();
  });
});

function clearForm() {
  $("#alta-locales-form")
    .find("input, textarea")
    .val("");
}

function saveShop(lat, lon) {
  var shop = new FormData();
  shop.append("name", $("#name").val());
  shop.append("addres", $("#direccion").val());
  shop.append("lat", $("#lat").val());
  shop.append("lon", $("#lon").val());
  shop.append("phone", $("#telefono").val());
  shop.append("hours", $("#horario").val());
  shop.append("shopImage", $("#file").val());
  //   shop.append(
  //     "shopImage",
  //     "D:\\Users\\Administrator\\Desktop\\Aerolab Challenge\\assets\\header-x1.jpeg"
  //   );

  var settings = {
    async: true,
    crossDomain: true,
    url: "http://localhost:3000/locales",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    processData: false,
    //contentType: false,
    mimeType: "multipart/form-data",
    data: shop
  };

  $.ajax(settings)
    .done(function(response) {
      console.log(response);
    })
    .always(function(response) {
        for (var pair of shop.entries()) {
            console.log(pair[0] + ", " + pair[1]);
          }    });

 

  // var form = new FormData();
  // form.append(
  //   "shopImage",
  //   "D:\\Users\\Administrator\\Desktop\\Aerolab Challenge\\assets\\header-x1.jpeg"
  // );
  // form.append("name", "name");
  // form.append(
  //   "address",
  //   "ASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASDASD"
  // );
  // form.append("lat", "0");
  // form.append("lon", "0");
  // form.append("phone", "12341234");
  // form.append("type", "fast");
  // form.append("description", "desctiption");
  // form.append("hours", "many");

  //   var settings = {
  //     async: true,
  //     crossDomain: true,
  //     url: "http://localhost:3000/locales",
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     processData: false,
  //     contentType: false,
  //     mimeType: "multipart/form-data",
  //     data: shop
  //   };

  //   $.ajax(settings).done(function(response) {
  //     console.log(response);
  //   });
  //   // $.post(server, shop, (data, status) => {
  //   //     console.log(`Status: ${status}`);
  //   //     if (status === 'success') {
  //   //         alert(`El local ${name} fue dado de alta con exito!`);
  //   //         clearForm();
  //   //     }
  //   // });
}

// ###############################
