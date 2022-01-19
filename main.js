// Initialize and add the map
function initMap() {
    // The location of ariana
    const ariana = { lat: 36.858898, lng: 10.196500 };
    // The map, centered at ariana
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: ariana,
    });
      // The marker, positioned at ariana
  const marker = new google.maps.Marker({
    position: ariana,
    map: map,
  });
}