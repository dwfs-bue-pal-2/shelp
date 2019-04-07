var center = {
  lat: -34.592868,
  lng: -58.4199791
};

var map;
var geocoder;

function inicializarMapa() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 14,
    mapTypeControl: false,
    mapTypeId: "roadmap"
  });

  var input = document.getElementById("direccion");
  var searchBox = new google.maps.places.SearchBox(input);
}

function getLatLong(direccion) {
  geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: direccion }, function(results, status) {
    if (status === "OK") {
      var resultados = results[0].geometry.location,
        resultados_lat = resultados.lat(),
        resultados_long = resultados.lng();
      saveShop(resultados_lat, resultados_long);
    } else {
      var mensajeError = "Error get latitude and longitude";

      alert(mensajeError);
    }
  });
}
