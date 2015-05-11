function fill_location_fields()
{
	geocoder = new google.maps.Geocoder();
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			default_lat = position.coords.latitude;
			default_lng = position.coords.longitude;
			log_from_lat = default_lat;
			log_from_lng = default_lng;
			codeLatLng(default_lat, default_lng);
		}, function() {
			//alert("Browser could not find your Geolocation");
		});
	} else {
		// Browser doesn't support Geolocation
		//alert("Browser doesn't support Geolocation");
	}
}
function codeLatLng(lat, lng) {
	var latlng = new google.maps.LatLng(lat, lng);
	geocoder.geocode({'latLng': latlng}, function(results, status) {
		var findResult = function(results, name){
			var result = _.find(results, function(obj){
				
				if(obj.types[0] == name && obj.types[1] == "political"){
					return obj.types[0];
				}
			});
			return result ? result.short_name : null;
		};
		if (status == google.maps.GeocoderStatus.OK) {
			if (results[1]) {
				//console.log(results[0].address_components);
				var country = findResult(results[0].address_components, "country");
				var city = findResult(results[0].address_components, "locality");
				var state = findResult(results[0].address_components, "administrative_area_level_1");
				var zip = findResult(results[0].address_components, "postal_code");
					$("#city").val(city);
					$('#state').val(state);
					$('#country').val(country);
					$('#zip').val(zip);
			}
		} else {
			//alert("Geocoder failed due to: " + status);
		}
	});
}
