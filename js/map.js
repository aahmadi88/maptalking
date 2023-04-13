var map = L.map('map').setView([35.74445636639672, 51.37546908328444], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([35.74445636639672, 51.37546908328444]).addTo(map)
		.bindPopup('The Tallest Tower in Iran')
		.openPopup();	