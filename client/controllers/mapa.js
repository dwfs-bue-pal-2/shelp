var center = {
  lat: -34.592868,
  lng: -58.4199791
};

function inicializarMapa() {
  return map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 14,
    mapTypeControl: false
  });
}
