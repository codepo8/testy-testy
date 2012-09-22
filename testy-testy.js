(function(){
  var body     = document,
      reactors = document.querySelector('.reactors'),
      left     = document.querySelector('#left'),
      right    = document.querySelector('#right'),
      top      = document.querySelector('#top'),
      bottom   = document.querySelector('#bottom'),
      space    = document.querySelector('#space'),
      click    = document.querySelector('#click'),
      current = null;

  body.addEventListener('keydown', function(ev) {
    switch (ev.which) {
      case 32: // space
        setcurrent(space);
      break;
      case 39: // right
        setcurrent(right);
      break;
      case 37: // left
        setcurrent(left);
      break;
      case 38: // up
        setcurrent(up);
      break;
      case 40: // down
        setcurrent(down);
      break;
      case 40: // down
        setcurrent(down);
      break;
      case 87: // w
        setcurrent(w);
      break;
      case 65: // a
        setcurrent(a);
      break;
      case 83: // s
        setcurrent(s);
      break;
      case 68: // d
        setcurrent(d);
      break;
      case 70: // f
        setcurrent(f);
      break;
      case 71: // g
        setcurrent(g);
      break;
    }
  }, false);
  body.addEventListener('keyup', function(ev) {
    removecurrent();
  }, false);
  body.addEventListener('mousedown', function(ev) {
    setcurrent(click);
  }, false);
  body.addEventListener('mouseup', function(ev) {
    removecurrent();
  }, false);
  function setcurrent(elm) {
    current = elm;
    elm.className = 'current reactors';
  }
  function removecurrent() {
    if (current) {
      current.className = 'reactors';
      }
      current = null;
  }
})();