/*jQuery('#vmap_world').vectorMap({
    map: 'world_en',
    backgroundColor: null,
    color: '#ffffff',
    hoverOpacity: 0.7,
    selectedColor: '#666666',
    enableZoom: true,
    showTooltip: true,
    values: sample_data,
    scaleColors: ['#C8EEFF', '#006491'],
    normalizeFunction: 'polynomial'
});*/
$(document).ready(function (){
jQuery('#vmap_usa').vectorMap({
    map: 'usa_en',
    backgroundColor: null,
    color: '#E4E5E3',
	colors: {ny:'#c9dfaf', ca: '#c9dfaf'},
    /*hoverOpacity: 0.7,*/
	hoverColor: '#2B540B',
    selectedColor: '#2B540B',
    enableZoom: true,
    showTooltip: true,
    values: sample_data,
    scaleColors: ['#E4E5E3', '#C6C6C6'],
    normalizeFunction: 'polynomial',
	showTooltip: true,
	selectedRegion: 'NY',
	selectedRegions: ['NY'],
	onRegionOver: function(event, code, region)
    {
     	if(code != 'ca' && code != 'ny')
		{
			event.preventDefault();
		}
		
    },
	onRegionClick: function (element, code, region) {
		if(code != 'ca' && code != 'ny')
		{
			event.preventDefault();
		}
		if(code == 'ny')
		{
			
		}
	}
});

var fc = '#c9dfaf';
jQuery('#vmap_world').vectorMap('set', 'colors', {code:fc});

});
