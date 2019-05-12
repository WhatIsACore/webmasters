'use strict';

// so we can feel like we're using jquery
function $(query){
  var q = document.querySelectorAll(query);
  return q.length > 1 ? q : q[0];
}

$('.purchase-btn').addEventListener('click', function(e){
  window.location.href = '/merch?prod=' + e.currentTarget.dataset.target;
});
