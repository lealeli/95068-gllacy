(function (window) {

  window.initMap = function () {
    var myLatLng = {lat: 59.9387987, lng: 30.3231642};
    var myLatLngCenter = {lat: 59.9388614, lng: 30.3249716};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: myLatLngCenter,
      disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: 'img/pin.png'
    });
  }

})(window);
