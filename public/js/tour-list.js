'use strict';

// so we can feel like we're using jquery
function $(query){
  var q = document.querySelectorAll(query);
  return q.length > 1 ? q : q[0];
}

setTimeout(function(){
  $('.page-title').className = $('.page-title').className.replace('hidden', 'revealed');
  $('#tour-list').className = 'revealed';
}, 50);

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

var tourDates = [
  {
    city: 'Boise, ID',
    date: '6/1',
    time: '8:00pm',
    venue: 'Taco Bell Arena'
  },
  {
    city: 'San Francisco, CA',
    date: '6/5',
    time: '9:00pm',
    venue: 'The Warfield'
  },
  {
    city: 'Los Angeles, CA',
    date: '6/6',
    time: '9:00pm',
    venue: 'El Rey Theatre'
  },
  {
    city: 'Phoenix, AZ',
    date: '6/7',
    time: '7:30pm',
    venue: 'Crescent Ballroom'
  },
  {
    city: 'Houston, TX',
    date: '6/8',
    time: '8:00pm',
    venue: 'HESS Club'
  },
  {
    city: 'Chicago, IL',
    date: '6/10',
    time: '7:30pm',
    venue: 'Aragon Ballroom'
  },
  {
    city: 'Philadelphia, PA',
    date: '6/12',
    time: '9:00pm',
    venue: 'Franklin Music Hall'
  },
  {
    city: 'New York, NY',
    date: '6/13',
    time: '8:30pm',
    venue: 'Madison Square Garden'
  }
];

var listData = '';
for(var i = 0; i < tourDates.length; i++){
  var t = tourDates[i];
  listData += `
    <div class='tour-date'>
      <div class='date'>` + t.date + `</div>
      <div class='info'>
        <div class='city'>` + t.city + `</div>
        <div class='venue'>` + t.venue + `, ` + t.time + `</div>
        <div class='tickets'>
          <a href='/merch?prod=tourtix'> see tickets </a>
        </div>
      </div>
    </div>
  `;
}
$('#tour-list').innerHTML += listData;
