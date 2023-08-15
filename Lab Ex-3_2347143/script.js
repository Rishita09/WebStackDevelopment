let msg = document.getElementById("alert");

var map;
function getMap() {
  map = new Microsoft.Maps.Map(document.getElementById("mapCanvas"), {});
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var currentLocation = new Microsoft.Maps.Location(
          position.coords.latitude,
          position.coords.longitude
        );
        map.setView({ center: currentLocation, zoom: 15 });

        var pin = new Microsoft.Maps.Pushpin(currentLocation);
        map.entities.push(pin);
      },
      function (error) {
        msg.style.display = block;
        msg.innerHTML = "An Error Occured try again!!";
      }
    );
  } else {
    msg.style.display = block;
    msg.innerHTML = "Geolocation is not supported by this browser.";
  }
}
