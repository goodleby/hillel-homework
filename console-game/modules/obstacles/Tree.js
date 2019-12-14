var Tree = (function() {
    var Tree = function(x) {
        var defs = {
            action: 'up'
        }
        Obstacle.call(this, {
            x: x,
            action: defs.action
        });
    };
    Tree.prototype = Object.create(Obstacle.prototype);
    Tree.prototype.constructor = Tree;
    Tree.prototype.setClimber = function(unit) {
        this.climbedBy = unit;
    }
    return Tree;
}());