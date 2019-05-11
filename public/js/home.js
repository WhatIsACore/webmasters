// so we can feel like we're using jquery
function $(query){
  return document.querySelector(query);
}

function scrollUpdate(){
  $('#sun-reflection').style.marginTop = $('#water').getBoundingClientRect().top - $('#sun').getBoundingClientRect().bottom + 'px';
}
window.addEventListener('scroll', scrollUpdate);
scrollUpdate();
