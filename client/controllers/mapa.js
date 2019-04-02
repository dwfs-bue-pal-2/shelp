var center = {
  lat: -34.592868,
  lng: -58.4199791
};

var map;
function inicializarMapa() {
	
  	map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 14,
    mapTypeControl: false,
    mapTypeId: 'roadmap'
  });

  	var input = document.getElementById('direccion');
    var searchBox = new google.maps.places.SearchBox(input);
    //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

       
}