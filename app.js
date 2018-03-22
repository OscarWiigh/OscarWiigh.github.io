var map;
var mapType = 'roadmap';
var startzoom = 18;

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

function centerOpen() {
	map.setCenter(marker3.position);;
}

function centerBiblo() {
	map.setCenter(marker2.position);;
}

function centerStads() {
	map.setCenter(marker1.position);;
}

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 59.3272911, lng: 18.0543577 },
		zoom: startzoom,
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
	else {
		map.setCenter({lat: 59.3272911, lng: 18.0543577});
	}

	var infowindow1 = new google.maps.InfoWindow({
		content: "<strong>Martins favoritplats</strong><p>Stadshuset</p>"
	  });

	marker1 = new google.maps.Marker({
		map: map,
		draggable: true,
		animation: google.maps.Animation.DROP,
		position: {lat: 59.3272911, lng: 18.0543577}
	  });
	  marker1.addListener('click', function() {
		infowindow1.open(map, marker1);
		});
		
		var infowindow2 = new google.maps.InfoWindow({
			content: "<a href='https://www.kth.se/en/kthb'><strong>KTH Biblioteket</strong></a>"
			});
	
		marker2 = new google.maps.Marker({
			map: map,
			draggable: true,
			animation: google.maps.Animation.DROP,
			position: { lat: 59.3478927, lng: 18.072917}
			});
			marker2.addListener('click', function() {
			infowindow2.open(map, marker2);
			});

			var infowindow3 = new google.maps.InfoWindow({
				content: "<a href='http://www.openlabsthlm.se/open-cafe/' target='_blank'><strong>Café Open</strong></a>"
				});
		
			marker3 = new google.maps.Marker({
				map: map,
				draggable: true,
				animation: google.maps.Animation.DROP,
				position: { lat: 59.346453, lng: 18.072463}
				});
				marker3.addListener('click', function() {
				infowindow3.open(map, marker3);
				});
	}

function addNewMarker(){
	var markerinfo = prompt("Description of the marker:");
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

