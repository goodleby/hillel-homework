var Tree = (function() {
  var Tree = function(x) {
    var defs = {
      action: 'up'
    };
    Obstacle.call(this, {
      action: defs.action
    });
  };
  Tree.prototype = Object.create(Obstacle.prototype);
  Tree.prototype.constructor = Tree;
  Tree.prototype.setClimber = function(unit) {
    this.climbedBy = unit;
  };
  Tree.prototype.getCell = function() {
    var el = document.createElement('div');
    el.classList.add('obstacle');
    el.style.backgroundColor = '#b74';
    el.innerHTML = 'Tree';
    return el;
  };
  return Tree;
})();
