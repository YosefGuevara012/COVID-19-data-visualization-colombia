var map = L.map('map').setView([4.7106778, -74.0732425], 6);
    L.tileLayer('https://api.maptiler.com/maps/darkmatter/{z}/{x}/{y}.png?key=9aOW9P5TIthZlr4M7tLF', {attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}).addTo(map);

/* JS - Graph data*/

var data = [
      { y: '2014', a: 50, b: 90},
      { y: '2015', a: 65,  b: 75},
      { y: '2016', a: 50,  b: 50},
      { y: '2017', a: 75,  b: 60},
      { y: '2018', a: 80,  b: 65},
      { y: '2019', a: 90,  b: 70},
      { y: '2020', a: 100, b: 75},
      { y: '2021', a: 115, b: 75},
      { y: '2022', a: 120, b: 85},
      { y: '2023', a: 145, b: 85},
      { y: '2024', a: 160, b: 95}
    ],
    config = {
      data: data,
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Total Income', 'Total Outcome'],
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors:['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors:['gray','red']
  };
config.element = 'area-chart';
Morris.Area(config);
config.element = 'line-chart';
Morris.Line(config);

/* JS - Circles*/

/* Bogotá D.C*/

var bogota = L.circle([4.6495993, -74.1739179], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 10000
}).addTo(map);
bogota.bindPopup("<b>Bogotá D.C.</b><br>Casos confirmados: 56.<br>Casos recuperados:1<br>Casos activos: 55<br>Fallecidos: 0");

/* Cundinamarca*/
var Cundinamarca = L.circle([5.0272558,-73.9995766], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 10000
}).addTo(map);
Cundinamarca.bindPopup("<b>Cundinamarca.</b><br>Casos confirmados: 5.<br>Casos recuperados:0.<br>Casos activos: 5<br>Fallecidos: 0");
/* Valle del Cauca*/
var valle = L.circle([3.4516364,-76.6720732], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 10000
}).addTo(map);
valle.bindPopup("<b>Valle del Cauca.</b><br>Casos confirmados: 17.<br>Casos recuperados:0.<br>Casos activos: 17<br>Fallecidos: 0");

/* Antioquia*/
var antioquia = L.circle([6.2441849,-75.7212989], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 10000
}).addTo(map);
antioquia.bindPopup("<b>Antioquia.</b><br>Casos confirmados: 22.<br>Casos recuperados:0.<br>Casos activos: 22<br>Fallecidos: 0");
/* Bolívar*/
var Bolívar = L.circle([10.3990533,-75.4735621], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 10000
}).addTo(map);
Bolívar.bindPopup("<b>Bolívar.</b><br>Casos confirmados: 9.<br>Casos recuperados:0.<br>Casos activos: 9<br>Fallecidos: 0");
/* Huila*/
var Huila = L.circle([2.9376172,-75.3424293], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 10000
}).addTo(map);
Huila.bindPopup("<b>Huila.</b><br>Casos confirmados: 9.<br>Casos recuperados:0.<br>Casos activos: 9<br>Fallecidos: 0");
/* Norte de Santander*/
var NS = L.circle([7.9087367,-72.6445079], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 10000
}).addTo(map);
NS.bindPopup("<b>Norte de Santander.</b><br>Casos confirmados: 6.<br>Casos recuperados:0.<br>Casos activos: 6<br>Fallecidos: 0");
/* Risaralda*/
var Risaralda = L.circle([4.8047603,-75.8538489], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 10000
}).addTo(map);
Risaralda.bindPopup("<b>Risaralda.</b><br>Casos confirmados: 6.<br>Casos recuperados:0.<br>Casos activos: 6<br>Fallecidos: 0");
/* Atlántico*/
var Atlántico = L.circle([10.9837799,-74.9581048], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 10000
}).addTo(map);
Atlántico.bindPopup("<b>Atlántico.</b><br>Casos confirmados: 5.<br>Casos recuperados:0.<br>Casos activos: 5<br>Fallecidos: 0");
/* Quindío*/
var Quindío = L.circle([4.5422681,-75.7505904], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 10000
}).addTo(map);
Quindío.bindPopup("<b>Quindío.</b><br>Casos confirmados: 3.<br>Casos recuperados:0.<br>Casos activos: 3<br>Fallecidos: 0");
/* Santander*/
var Santander = L.circle([7.1192007,-73.2030188], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 10000
}).addTo(map);
Santander.bindPopup("<b>Santander.</b><br>Casos confirmados: 2.<br>Casos recuperados:0.<br>Casos activos: 2<br>Fallecidos: 0");
/* Caldas*/
var Caldas = L.circle([5.0686824,-75.6237304], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 10000
}).addTo(map);
Caldas.bindPopup("<b>Caldas.</b><br>Casos confirmados: 2.<br>Casos recuperados:0.<br>Casos activos: 2<br>Fallecidos: 0");
/* Tolima*/
var Tolima = L.circle([4.4122764,-75.326865], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 10000
}).addTo(map);
Tolima.bindPopup("<b>Tolima.</b><br>Casos confirmados: 2.<br>Casos recuperados:0.<br>Casos activos: 2<br>Fallecidos: 0");
/* Meta*/
var Meta = L.circle([4.1247452,-73.7491475], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 10000
}).addTo(map);
Meta.bindPopup("<b>Meta.</b><br>Casos confirmados: 1.<br>Casos recuperados:0.<br>Casos activos: 1<br>Fallecidos: 0");