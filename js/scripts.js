
var map = L.map('mapcontainer').setView([39.9526, -75.1652], 13);
var layer = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
  }).addTo(map)
L.marker([39.9495, -75.1719]).addTo(map)
  .bindPopup('Rittenhouse Square')
