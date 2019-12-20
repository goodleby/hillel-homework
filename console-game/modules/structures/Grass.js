var Grass = (function() {
  var Grass = function() {
    var defs = {};
    Structure.call(this);
  };
  Grass.prototype = Object.create(Structure.prototype);
  Grass.prototype.constructor = Grass;
  Grass.prototype.getCell = function() {
    var el = document.createElement('div');
    el.classList.add('grass');
    el.style.backgroundColor = '#0f7';
    return el;
  };
  return Grass;
})();
