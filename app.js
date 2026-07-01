// Membuat peta
const map = L.map("map").setView([-6.200000, 106.816666], 13);

// Menambahkan layer OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19
}).addTo(map);

// Marker awal
L.marker([-6.200000, 106.816666])
    .addTo(map)
    .bindPopup("📍 ApotekFinder")
    .openPopup();
