var MapsVector = function () {

    var setMap = function (name) {
        var data = {
           // map: 'usa_en',
			backgroundColor: null,
			color: '#E4E5E3',
			//colors: {ny:'#c9dfaf', ca: '#c9dfaf'},
			/*hoverOpacity: 0.7,*/
			hoverColor: '#2B540B',
			selectedColor: '#2B540B',
			enableZoom: true,
			showTooltip: true,
			values: sample_data,
			scaleColors: ['#E4E5E3', '#C6C6C6'],
			normalizeFunction: 'polynomial',
			showTooltip: true,
			selectedRegion: 'US',
			selectedRegions: ['US'],
			onRegionOver: function(event, code, region)
			{
				if(code != 'US' && code != 'UK' && code != 'UK')
				{
					event.preventDefault();
				}
			},
			onRegionClick: function (element, code, region) {
				if(code != 'ca' && code != 'ny')
				{
					event.preventDefault();
				}
				else
				{
					var selected  = (code == 'ca')?'sfo1':'nyc1';
					$('#selected_region').val(selected);
				}
			}
        };

        data.map = name + '_en';
        var map = jQuery('#vmap');
        if (!map) {
            return;
        }
        map.width(map.parent().width());
        map.vectorMap(data);
    }


    return {
        //main function to initiate map samples
        init: function () { 
            /*setMap("world");*/
            setMap("world");
			

            /*setMap("europe");
            setMap("russia");
            setMap("germany");*/

            // redraw maps on window or content resized 
            /*Metronic.addResizeHandler(function(){
                setMap("us");*/
                /*setMap("usa");
                setMap("europe");
                setMap("russia");
                setMap("germany");*/
            //});
        }

    };

}();

var jVectorMap = function(){
	 var setMap = function (name, div_id){
							  $('#'+div_id).vectorMap({
								map: name+'_mill_en',
								regionStyle: {
								  initial: {
									fill: '#E4E5E3',
									"fill-opacity": 1,
									stroke: 'none',
									"stroke-width": 0,
									"stroke-opacity": 1
								  }
								},
								series: {
								  regions: [{
									values: {
										US:'#c9dfaf',
										GB:'#c9dfaf',
										NL:'#c9dfaf',
										SG:'#c9dfaf',										
									},
									attribute: 'fill',									
								  }],
								},
								markerStyle: {
								  initial: {
									fill: '#c9dfaf',
									stroke: '#2B540B',
									"stroke-width": 2,
									r: 8
								  },
								  hover: {
									fill: '#2B540B',
									stroke: '#D84A38',
									"stroke-width": 2,
									cursor: 'pointer'
								  },
								  selected: {
									fill: '#2B540B',
									"stroke-width": 2,
									stroke: '#D84A38',
								  },
								},
								markersSelectable: true,
								markersSelectableOne: true,
								zoomButtons: false,
								color: '#E4E5E3',
								hoverColor: '#2B540B',
								selectedColor: '#2B540B',
								scaleColors: ['#E4E5E3', '#C6C6C6'],
								normalizeFunction: 'polynomial',
								hoverOpacity: 0.7,
								hoverColor: false,
								backgroundColor: null,
								
								markers: [
								  {latLng: [1.3, 103.8], name: 'Singapore'},
								  {latLng: [51.5072, 0.1275], image: 'assets/global/img/server.png', name: 'London'},
								  {latLng: [52.3667, 4.9000], image: 'assets/global/img/server.png', name: 'Amsterdam'},
								  {latLng: [40.7127, -74.0059], image: 'assets/global/img/server.png', name: 'New York'},
								  {latLng: [37.90, -120.00], image: 'assets/global/img/server.png', name: 'San Francisco'},
								],
								selectedMarkers: 3,
								onMarkerSelected: function(event, index, isSelected, selectedMarkers){
								  var abrs = {0: 'sgp1', 1: 'lon1', 2: 'ams3', 3: 'nyc3', 4: 'sfo1'};
								  var regions = {0: 'Singapore', 1: 'London', 2: 'Amsterdam', 3: 'New York', 4: 'San Francisco'};
								  //console.log(abrs[index]);
								  $('#selected_region').val(abrs[index]);
								  $('#selected_region_title').html(regions[index]);
								  loadSnapshots(abrs[index]);
								},
							  });
	 }
	 
	 return {
        init: function () {
			setMap("world", 'vmap'); 
        }
    };
	
}();
