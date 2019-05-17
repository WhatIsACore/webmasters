'use strict';

// so we can feel like we're using jquery
function $(query){
  var q = document.querySelectorAll(query);
  return q.length > 1 ? q : q[0];
}

function scrollUpdate(){
  $('#sun-reflection').style.marginTop = $('#water').getBoundingClientRect().top - $('#sun').getBoundingClientRect().bottom + 'px';
  var scroll = window.scrollY;

  var hiddenEls = $('.hidden1');
  var ht = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  for(var i in hiddenEls){
    var h = hiddenEls[i];
    if(!h.getBoundingClientRect) break;
    if(ht - h.getBoundingClientRect().top > 150) h.style.opacity = 1;
  }
  
}

$('#sun-reflection').style.marginTop = $('#water').getBoundingClientRect().top - $('#sun').getBoundingClientRect().bottom + 'px';
// reveals
window.setTimeout(function(){
  $('#sun').style.opacity = 1;
  $('#sun').className += ' risen';
  $('#sun-reflection').style.marginTop = 'calc(36vh - 14vw)';
}, 10);
window.setTimeout(function(){
  $('#logo').style.opacity = 1;
}, 400);
window.setTimeout(function(){
  $('#sun-reflection').className = 'risen';
  // make the reflection match the sun!
  window.addEventListener('scroll', scrollUpdate);
  window.addEventListener('resize', scrollUpdate);
  scrollUpdate();
}, 600);
window.setTimeout(function(){
  $('#tour-banner').style.opacity = 1;
}, 800);

// make album links work
var albums = $('#album-grid .item');
for(var i in albums){
  if(!albums[i].dataset) break;
  albums[i].addEventListener('click', function(e){
    window.location.href = '/music/' + e.currentTarget.dataset.target;
  });
}

$('.tour-btn').addEventListener('click', function(){
  window.location.href = '/tour';
});
