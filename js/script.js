var map = L.map('map').setView([40.68025, -74.00155], 13);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

//define parks icon
var parksIcon = L.icon({
    iconUrl: 'img/parkIcon.png',
    //shadowUrl: 'leaf-shadow.png',

    //origin is upper left-hand corner (0,0)
    iconSize:     [32, 37], // size of the icon
    shadowSize:   [51, 37], // size of the shadow
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 37],  // the same for the shadow
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});

//Create markers for parks
var centralParkMarker = L.marker([40.779351, -73.967857], {icon: parksIcon}).addTo(map);

var riversideParkMarker = L.marker([40.801780, -73.972063], {icon: parksIcon}).addTo(map);

var prospectParkMarker = L.marker([40.661489, -73.968887],{icon: parksIcon}).addTo(map);


//listeners for sidebar hovers
$('.park').on('mouseover',function(){
	$(this).css('background','#8ECEFA');
});

$('.park').on('mouseout',function(){
	$(this).css('background','#46B3FE');
});


//Park Click Listeners
$('.centralPark').on('click',function(){
	//console.log("you clicked Central Park!");

});

$('.riversidePark').on('click',function(){
	//console.log("you clicked Central Park!");

});

$('.prospectPark').on('click',function(){
	//console.log("you clicked Central Park!");

});


//recenter the map on click
$('.centralPark').on('click',function(){
	map.panTo(new L.LatLng(40.779351, -73.967857),{animate: true, duration: 1.0});
	//$('#image').css('background-image',"url('img/centralPark.jpg')");
});

$('.riversidePark').on('click',function(){
	map.panTo(new L.LatLng(40.801780, -73.972063),{animate: true, duration: 1.0});
	//$('#image').css('background-image',"url('img/centralPark.jpg')");
});

$('.prospectPark').on('click',function(){
	map.panTo(new L.LatLng(40.661489, -73.968887),{animate: true, duration: 1.0});
	//$('#image').css('background-image',"url('img/centralPark.jpg')");
});


//listeners for marker hovers
centralParkMarker.on('mouseover',function(){
	$('.centralPark').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.centralPark').toggleClass('hover');
	});

prospectParkMarker.on('mouseover',function(){
	$('.prospectPark').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.prospectPark').toggleClass('hover');
	});

riversideParkMarker.on('mouseover',function(){
	$('.riversidePark').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.riversidePark').toggleClass('hover');
	});

//listener for box hover
$('.park').hover(function(){
	$(this).toggleClass('hover');
},function(){
	$(this).toggleClass('hover');
});
