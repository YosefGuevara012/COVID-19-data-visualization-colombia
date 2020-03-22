 var map = L.map('map').setView([4.7106778, -74.0732425], 6);
    L.tileLayer('https://api.maptiler.com/maps/darkmatter/{z}/{x}/{y}.png?key=9aOW9P5TIthZlr4M7tLF', {attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}).addTo(map);

/* JS - Graph data*/
var datacolombia = [
      { y: '2020-03-06', a: 1, b: 0},
      { y: '2020-03-07', a: 1,  b: 0},
      { y: '2020-03-08', a: 1,  b: 0},
      { y: '2020-03-09', a: 3,  b: 0},
      { y: '2020-03-10', a: 9,  b: 0},
      { y: '2020-03-11', a: 12,  b: 0},
      { y: '2020-03-12', a: 12, b: 0},
      { y: '2020-03-13', a: 16, b: 0},
      { y: '2020-03-14', a: 24, b: 0},
      { y: '2020-03-15', a: 45, b: 1},
      { y: '2020-03-16', a: 57, b: 2},
      { y: '2020-03-17', a: 75, b: 2},
      { y: '2020-03-18', a: 102, b: 2},
      { y: '2020-03-19', a: 128, b: 2},
      { y: '2020-03-20', a: 158, b: 2},
      { y: '2020-03-21', a: 210, b: 3}
    ],
    config = {
      data: datacolombia,
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Casos confirmados', 'Casos recuperados'],
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors:['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors:['red','green']
  };

var databogota = [
      { y: '2020-03-06', a: 1, b: 0},
      { y: '2020-03-07', a: 1,  b: 0},
      { y: '2020-03-08', a: 1,  b: 0},
      { y: '2020-03-09', a: 1,  b: 0},
      { y: '2020-03-10', a: 1,  b: 0},
      { y: '2020-03-11', a: 2,  b: 0},
      { y: '2020-03-12', a: 4, b: 0},
      { y: '2020-03-13', a: 5, b: 0},
      { y: '2020-03-14', a: 10, b: 0},
      { y: '2020-03-15', a: 18, b: 0},
      { y: '2020-03-16', a: 30, b: 1},
      { y: '2020-03-17', a: 40, b: 1},
      { y: '2020-03-18', a: 45, b: 1},
      { y: '2020-03-19', a: 53, b: 1},
      { y: '2020-03-20', a: 65, b: 1},
      { y: '2020-03-21', a: 88, b: 1}
    ],
    config2 = {
      data: databogota,
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Casos confirmados', 'Casos recuperados'],
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors:['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors:['red','green']
  };

config.element = 'area-chart';
Morris.Area(config);
config2.element = 'line-chart';
Morris.Line(config2);

/* JS - Circles*/

/* Bogotá D.C*/

var bogota = L.circle([4.6495993, -74.1739179], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 42000
}).addTo(map);
bogota.bindPopup("<b>Bogotá D.C.</b><br>Casos confirmados: 88.<br>Casos recuperados:1<br>Casos activos: 87<br>Fallecidos: 0");

/* Cundinamarca*/
var Cundinamarca = L.circle([5.0272558,-73.9995766], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 4000
}).addTo(map);
Cundinamarca.bindPopup("<b>Cundinamarca.</b><br>Casos confirmados: 8.<br>Casos recuperados:0.<br>Casos activos: 8<br>Fallecidos: 0");
/* Valle del Cauca*/
var valle = L.circle([3.4516364,-76.6720732], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 12000
}).addTo(map);
valle.bindPopup("<b>Valle del Cauca.</b><br>Casos confirmados: 26.<br>Casos recuperados:1.<br>Casos activos: 25<br>Fallecidos: 0");

/* Antioquia*/
var antioquia = L.circle([6.2441849,-75.7212989], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 12000
}).addTo(map);
antioquia.bindPopup("<b>Antioquia.</b><br>Casos confirmados: 25.<br>Casos recuperados:1.<br>Casos activos: 24<br>Fallecidos: 0");
/* Bolívar*/
var Bolívar = L.circle([10.3990533,-75.4735621], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 7000
}).addTo(map);
Bolívar.bindPopup("<b>Bolívar.</b><br>Casos confirmados: 14.<br>Casos recuperados:0.<br>Casos activos: 13<br>Fallecidos: 1");
/* Huila*/
var Huila = L.circle([2.9376172,-75.3424293], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 5000
}).addTo(map);
Huila.bindPopup("<b>Huila.</b><br>Casos confirmados: 10.<br>Casos recuperados:0.<br>Casos activos: 10<br>Fallecidos: 0");
/* Norte de Santander*/
var NS = L.circle([7.9087367,-72.6445079], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 4000
}).addTo(map);
NS.bindPopup("<b>Norte de Santander.</b><br>Casos confirmados: 8.<br>Casos recuperados:0.<br>Casos activos: 8<br>Fallecidos: 0");
/* Risaralda*/
var Risaralda = L.circle([4.8047603,-75.8538489], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 4000
}).addTo(map);
Risaralda.bindPopup("<b>Risaralda.</b><br>Casos confirmados: 8.<br>Casos recuperados:0.<br>Casos activos: 8<br>Fallecidos: 0");
/* Atlántico*/
var Atlántico = L.circle([10.9837799,-74.9581048], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 3000
}).addTo(map);
Atlántico.bindPopup("<b>Atlántico.</b><br>Casos confirmados: 7.<br>Casos recuperados:0.<br>Casos activos: 7<br>Fallecidos: 0");
/* Quindío*/
var Quindío = L.circle([4.5422681,-75.7505904], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 1000
}).addTo(map);
Quindío.bindPopup("<b>Quindío.</b><br>Casos confirmados: 3.<br>Casos recuperados:0.<br>Casos activos: 3<br>Fallecidos: 0");
/* Santander*/
var Santander = L.circle([7.1192007,-73.2030188], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 1000
}).addTo(map);
Santander.bindPopup("<b>Santander.</b><br>Casos confirmados: 2.<br>Casos recuperados:0.<br>Casos activos: 2<br>Fallecidos: 0");
/* Caldas*/
var Caldas = L.circle([5.0686824,-75.6237304], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 2000
}).addTo(map);
Caldas.bindPopup("<b>Caldas.</b><br>Casos confirmados: 3.<br>Casos recuperados:0.<br>Casos activos: 3<br>Fallecidos: 0");
/* Tolima*/
var Tolima = L.circle([4.4122764,-75.326865], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 2000
}).addTo(map);
Tolima.bindPopup("<b>Tolima.</b><br>Casos confirmados: 3.<br>Casos recuperados:0.<br>Casos activos: 3<br>Fallecidos: 0");
/* Meta*/
var Meta = L.circle([4.1247452,-73.7491475], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 10000
}).addTo(map);
Meta.bindPopup("<b>Meta.</b><br>Casos confirmados: 1.<br>Casos recuperados:0.<br>Casos activos: 1<br>Fallecidos: 0");

/* magdalena*/

var magdalena = L.circle([11.2316073,-74.2175025], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 1000
}).addTo(map);
magdalena.bindPopup("<b>Magdalena</b><br>Casos confirmados: 2.<br>Casos recuperados:0<br>Casos activos: 2<br>Fallecidos: 0");

var cauca = L.circle([2.4574702,-76.6350395], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 1000
}).addTo(map);
cauca.bindPopup("<b>Cauca</b><br>Casos confirmados: 2.<br>Casos recuperados:0<br>Casos activos: 2<br>Fallecidos: 0");