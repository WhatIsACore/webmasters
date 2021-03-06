'use strict';

// so we can feel like we're using jquery
function $(query){
  var q = document.querySelectorAll(query);
  return q.length > 1 ? q : q[0];
}

window.setTimeout(function(){
  $('#music').style.opacity = 1;
}, 200);

var viewBtns = $('.view-btn');
for(var i in viewBtns){
  if(!viewBtns[i].dataset) break;
  viewBtns[i].addEventListener('click', function(e){
    window.location.href = '/music/' + e.currentTarget.dataset.target;
  });
}

if($('.purchase-btn')) $('.purchase-btn').addEventListener('click', function(e){
  window.location.href = '/merch?prod=' + e.currentTarget.dataset.target;
});

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
