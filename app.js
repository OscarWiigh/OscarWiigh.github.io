var map;
var mapType = 'roadmap';
startzoom = 18;

function Zoomplus() {
	map.setZoom(map.getZoom()+1);

}

function Zoomminus() {
	map.setZoom(map.getZoom()-1);

}

function mapRoad() {
	map.setMapTypeId('roadmap');
}

function mapSat() {
	map.setMapTypeId('satellite');
}

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 59.3272911, lng: 18.0543577 },
		zoom: startzoom,
		//center: {lat: 59.3498092, lng: 18.0684758},
		//zoom: 19,
		mapTypeId: mapType,
		disableDefaultUI: true
	});

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
		  var pos = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		  };
		  map.setCenter(pos);
		});
	}

	var infowindow = new google.maps.InfoWindow({
		content: "<strong>Martins favoritplats</strong><p>Stadshuset</p>"
	  });

	markerstart = new google.maps.Marker({
		map: map,
		draggable: true,
		animation: google.maps.Animation.DROP,
		position: { lat: 59.3272911, lng: 18.0543577 }
	  });
	  markerstart.addListener('click', function() {
		infowindow.open(map, markerstart);
	  });
	}

function toggleBounce() {
	if (marker.getAnimation() !== null) {
	  marker.setAnimation(null);
	} else {
	  marker.setAnimation(google.maps.Animation.BOUNCE);
	}
  }

function addNewMarker(){
	var markerinfo = prompt("Add a description of the Marker!");
	var infowindow = new google.maps.InfoWindow({
		content: markerinfo
	  });

	marker = new google.maps.Marker({
		map: map,
		draggable: true,
		animation: google.maps.Animation.DROP,
		position: map.getCenter()
	  });
	  map.setCenter(map.getCenter());
	  marker.addListener('click', function() {
		infowindow.open(map, marker);
	  });
}

  function hideStart() {
	$("#main").css({"-webkit-filter:": "", "-moz-filter": "", "-o-filter":"", "-ms-filter":"", "filter": ""});
  }

