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
