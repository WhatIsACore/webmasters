'use strict';

// so we can feel like we're using jquery
function $(query){
  var q = document.querySelectorAll(query);
  return q.length > 1 ? q : q[0];
}

// make the reflection match the sun!
function scrollUpdate(){
  $('#sun-reflection').style.marginTop = $('#water').getBoundingClientRect().top - $('#sun').getBoundingClientRect().bottom + 'px';
}
window.addEventListener('scroll', scrollUpdate);
window.addEventListener('resize', scrollUpdate);
scrollUpdate();

// make album links work
var albums = $('#album-grid .item');
for(var i in albums){
  if(!albums[i].dataset) break;
  albums[i].addEventListener('click', function(e){
    window.location.href = '/music/' + e.currentTarget.dataset.target;
  });
}
