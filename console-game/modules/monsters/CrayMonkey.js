var CrayMonkey = (function() {
	var CrayMonkey = function(lvl) {
		var defs = {
			hp: 115,
			dmg: 30
		};
		Unit.call(this, {
			lvl: lvl,
			hp: defs.hp,
			dmg: defs.dmg
		});
	};
	CrayMonkey.prototype = Object.create(Unit.prototype);
	CrayMonkey.prototype.constructor = CrayMonkey;
	CrayMonkey.prototype.climbATree = function(tree) {
		this.climbedTree = tree;
		tree.setClimber(this);
	};
	return CrayMonkey;
})();
