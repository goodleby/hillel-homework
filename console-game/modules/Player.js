var Player = (function() {
	var defs = {
		hp: 500,
		dmg: 45
	};
	var Player = function(lvl) {
		Unit.call(this, {
			lvl: lvl,
			hp: defs.hp,
			dmg: defs.dmg
		});
	};
	Player.prototype = Object.create(Unit.prototype);
	Player.prototype.constructor = Player;
	Player.prototype.setPos = function(pos) {
		return (this.pos = pos);
	};
	Player.prototype.levelUp = function() {
		var lvlPercentModifier = this.getPercentModifier(++this.lvl);
		// var takenDamage = this.maxHp - this.hp;
		this.maxHp = this.hp = Math.round(defs.hp * lvlPercentModifier);
		// this.hp = this.maxHp - takenDamage;
		this.dmg = Math.round(defs.dmg * lvlPercentModifier);
	};
	Player.prototype.getCell = function() {
		var el = document.createElement('div');
		el.classList.add('player');
		el.style.backgroundColor = '#a57e94';
		el.dataset.hp = this.hp;
		el.dataset.dmg = this.dmg;
		el.innerHTML = 'HP: ' + this.hp + '\nDMG: ' + this.dmg;
		return el;
	};
	return Player;
})();
