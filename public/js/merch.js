'use strict';

// so we can feel like we're using jquery
function $(query){
  var q = document.querySelectorAll(query);
  return q.length > 1 ? q : q[0];
}

// get all merch flex boxes to be same width, even after they wrap
var items = $('#merch-grid .item');
var model = $('#merch-grid .item')[0];
function updateWidth(){
  for(var i in items){
    if(!items[i].dataset) break;
    items[i].style.maxWidth = model.children[0].getBoundingClientRect().width + 'px';
  }
}
window.addEventListener('resize', updateWidth);
updateWidth();
