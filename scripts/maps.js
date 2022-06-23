var map = L.map('map').setView([32.8, -117.23], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([32.8, -117.23]).addTo(map);

map.invalidateSize();