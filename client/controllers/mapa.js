var map;
var geocoder;

inicializarMapa = () => {
  var mapObj = {
    center: {
      lat: -34.592868,
      lng: -58.4199791
    },
    zoom: 14,
    mapTypeControl: false,
    mapTypeId: "roadmap"
  };

  map = new google.maps.Map(document.getElementById("map"), mapObj);

  var input = document.getElementById("direccion");
  var searchBox = new google.maps.places.SearchBox(input);
};

getLatLong = direccion => {
  geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: direccion }, (results, status) => {
    if (status === "OK") {
      var resultados = results[0].geometry.location,
        resultados_lat = resultados.lat(),
        resultados_long = resultados.lng();

      saveShop(resultados_lat, resultados_long);
    } else {
      alert("Error get latitude and longitude");
    }
  });
};
