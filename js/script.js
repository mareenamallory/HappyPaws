var retailers = [

    // Alberta
    {
      "lat": 55.181793,
      "lng": -118.792649,
      "title": "Partners Naturally",
      "content": "Partners Naturally <br> 9913 112 Ave, Grande Prairie, AB T8V 1V5 <br> <a href=\"https://www.partnersnaturally.ca/\" target=\"_blank\"> partnersnaturally.ca</a>"
    },

    // Abbotsford

    //Aldergrove
    {
      "lat": 49.059262,
      "lng": -122.469090,
      "title": "Pet Junction Grooming & Supplies",
      "content": "Pet Junction Grooming & Supplies <br> 27665 Fraser Highway, Aldergrove, BC V4W 3N7 <br> <a href=\"https://petjunctiongrooming.com/\" target=\"_blank\"> petjunctiongrooming.com</a>"
    },

    //Burnaby
    {
      "lat": 49.248446,
      "lng": -122.972941,
      "title": "Tisol Pet Nutrition & Supply Stores",
      "content": "Tisol Pet Nutrition & Supply Stores <br> 7117 Gilley Ave, Burnaby, BC V5J 4W9 <br> <a href=\"https://tisol.ca\" target=\"_blank\"> tisol.ca</a>"
    },

    //Coquitlam

];


var map = new GMaps({
    el: '#map',
    lat: 55.181793,
    lng: -118.792649,
});

for (i = 0; i < retailers.length; i++) {
  map.addMarker({
      lat: retailers[i].lat,
      lng: retailers[i].lng,
      title: retailers[i].title,
      infoWindow: {
        content: retailers[i].content
      }
  });
}


map.setZoom(4);
