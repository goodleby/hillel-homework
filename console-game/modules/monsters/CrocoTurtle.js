var CrocoTurtle = (function() {
	var CrocoTurtle = function(lvl) {
		var defs = {
			hp: 225,
			dmg: 15
		};
		Unit.call(this, {
			lvl: lvl,
			hp: defs.hp,
			dmg: defs.dmg
		});
	};
	CrocoTurtle.prototype = Object.create(Unit.prototype);
	CrocoTurtle.prototype.constructor = CrocoTurtle;
	CrocoTurtle.prototype.hideInShell = function() {
		var savedHp = this.hp;
		this.hp = this.hp * 10;
		return function getOut() {
			this.hp = savedHp;
		};
	};
	return CrocoTurtle;
})();
