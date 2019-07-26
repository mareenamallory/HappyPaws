var map = new GMaps({
    el: '#map',
    lat: 55.181793,
    lng: -118.792649,
});

map.addMarker({
    lat: 55.181793,
    lng: -118.792649,
    title: 'Partners Naturally',
    infoWindow: {
      content: 'Partners Naturally <br> 9913 112 Ave, Grande Prairie, AB T8V 1V5 <br> <a href="https://www.partnersnaturally.ca/" target="_blank"> partnersnaturally.ca</a>'

    }
});


map.setZoom(3);
