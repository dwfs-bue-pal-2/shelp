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
    mapTypeId: 'roadmap'
  });

  	var input = document.getElementById('direccion');
    var searchBox = new google.maps.places.SearchBox(input);

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				infoWindow = new google.maps.InfoWindow;

				infoWindow.setPosition(pos);
				infoWindow.setContent('Ubicacion actual');
				infoWindow.open(map);
				map.setCenter(pos);
			}, function() {
				handleLocationError(true, infoWindow, map.getCenter());
			});
		} else {
			// Browser doesn't support Geolocation
			handleLocationError(false, infoWindow, map.getCenter());
			console.log("errrr");
		}       
       
}

function getLatLong(direccion){

	geocoder = new google.maps.Geocoder();

	geocoder.geocode({'address': direccion}, function(results, status) {
			if (status === 'OK') {
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