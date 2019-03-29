var mapa;
var centro = {
  lat: -34.592868,
  lng: -58.4199791
};
/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa() {
  /* Modificá la variable mapa con el constructor Map().
    Tendrás que asignarle un valor de zoom y
    un centro igual a la variable posicionCentral. */
  mapa = new google.maps.Map(document.getElementById("map"), {
    center: centro,
    zoom: 12,
    mapTypeControl: false
  });
}
