var reflections = document.getElementsByClassName('reflection-line');

for(var i in reflections){
  var r = reflections[i];
  if(!r.style) break;
  r.style.width = (Math.floor(Math.random() * 80) + 20) + '%';
}

function setAnimationParams(){
  var n = 0;
  var pWidth = 0;
  for(var i in reflections){
    var r = reflections[i];
    if(!r.style) break;
    if(n == 0){
      pWidth = parseInt(r.style.width.split('%')[0]);
      r.style.width = (Math.floor(Math.random() * 80) + 20) + '%';
    } else {
      var tmp = r.style.width;
      r.style.width = Math.floor(pWidth * (1 - n * 0.01)) + '%';
      pWidth = parseInt(tmp.split('%')[0]);
    }
    n++;
  }
}
setInterval(setAnimationParams, 300);
