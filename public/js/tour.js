'use strict';

// so we can feel like we're using jquery
function $(query){
  var q = document.querySelectorAll(query);
  return q.length > 1 ? q : q[0];
}

function scrollUpdate(){
  var scroll = window.scrollY;

  if(scroll > 1){
    $('#navbar').className = 'scrolled';
  } else {
    $('#navbar').className = '';
  }
}
window.addEventListener('scroll', scrollUpdate);
window.addEventListener('resize', scrollUpdate);
scrollUpdate();

window.setTimeout(function(){
  $('.section-title').className = $('.section-title').className.replace('hidden', 'revealed');
}, 200);
window.setTimeout(function(){
  $('.subtitle').className = $('.subtitle').className.replace('hidden', 'revealed');
}, 400);
window.setTimeout(function(){
  $('.btn-wrapper').className = $('.btn-wrapper').className.replace('hidden', 'revealed');
}, 500);
window.setTimeout(function(){
  $('#map').className = $('#map').className.replace('hidden', 'revealed');
}, 800);

var map = $('#map');

// uncomment this code to find the coordinates for new map markers
/**
map.addEventListener('click', function(e){
  var x = e.offsetX / map.offsetWidth;
  var y = e.offsetY / map.offsetHeight;
  alert(x.toFixed(5) + ' / ' + y.toFixed(5));
});
**/

var tourMarkers = [
  {
    x: 0.1577,
    y: 0.2822,
    city: 'Boise, ID',
    date: '6/1/2019',
    time: '8:00pm',
    venue: 'Taco Bell Arena'
  },
  {
    x: 0.0233,
    y: 0.4806,
    city: 'San Francisco, CA',
    date: '6/5/2019',
    time: '9:00pm',
    venue: 'The Warfield'
  },
  {
    x: 0.0867,
    y: 0.6490,
    city: 'Los Angeles, CA',
    date: '6/6/2019',
    time: '9:00pm',
    venue: 'El Rey Theatre'
  },
  {
    x: 0.2019,
    y: 0.6900,
    city: 'Phoenix, AZ',
    date: '6/7/2019',
    time: '7:30pm',
    venue: 'Crescent Ballroom'
  },
  {
    x: 0.5558,
    y: 0.8636,
    city: 'Houston, TX',
    date: '6/8/2019',
    time: '8:00pm',
    venue: 'HESS Club'
  },
  {
    x: 0.6712,
    y: 0.3488,
    city: 'Chicago, IL',
    date: '6/10/2019',
    time: '7:30pm',
    venue: 'Aragon Ballroom'
  },
  {
    x: 0.9077,
    y: 0.3411,
    city: 'Philadelphia, PA',
    date: '6/12/2019',
    time: '9:00pm',
    venue: 'Franklin Music Hall'
  },
  {
    x: 0.9240,
    y: 0.2930,
    city: 'New York, NY',
    date: '6/13/2019',
    time: '8:30pm',
    venue: 'Madison Square Garden'
  }
];

// create map markers in html
var mapData = '';
for(var i = 0; i < tourMarkers.length; i++){
  var t = tourMarkers[i];
  mapData += `
    <div class='map-marker' style='left: ` + (t.x * 100) + `%; top: ` + (t.y * 100) + `%;' data-id=` + i + `>
      <div class='label'>` + t.city + `</div>
    </div>
  `;
}
map.innerHTML += mapData;

// now make them clickable!
var markers = $('.map-marker')
for(var i in markers){
  if(!markers[i].dataset) break;
  markers[i].addEventListener('click', showModal);
}
$('#modal-backdrop').addEventListener('click', hideModal);
$('#exit-modal').addEventListener('click', hideModal);

function showModal(e){
  var show = tourMarkers[e.currentTarget.dataset.id];
  $('#modal-backdrop').className = 'active';
  $('#tour-modal').className = 'active';
  $('#tour-date').innerHTML = show.date;
  $('#tour-city').innerHTML = show.city;
  $('#tour-venue').innerHTML = show.venue;
  $('#tour-time').innerHTML = show.time;
}
function hideModal(){
  $('#modal-backdrop').className = '';
  $('#tour-modal').className = '';
}

$('#tour-buy-btn').addEventListener('click', function(){
  window.location.href = '/merch?prod=tourtix';
});
