var Level = (function() {
	var Level = function(size, player) {
		this.size = size;
		this.path = Array(this.size).fill(new Grass());
		this.player = player;
		this.path[this.player.pos] = this.player;
	};
	Level.prototype.getRandPos = function() {
		var pos = getRandInt(this.path.length);
		if (!this.path.some(item => item instanceof Grass))
			throw new Error('There is no more empty space on the path');
		return this.path[pos] instanceof Grass ? pos : this.getRandPos();
	};
	Level.prototype.spawnMonsters = function(monsters, amount) {
		var minLvl = this.player.lvl > 1 ? this.player.lvl - 1 : this.player.lvl;
		var maxLvl = this.player.lvl + 1;
		for (let i = 0; i < amount; i++) {
			this.path[this.getRandPos()] = new monsters[getRandInt(monsters.length)](
				getRandInt(minLvl, maxLvl)
			);
		}
	};
	Level.prototype.spawnObstacles = function(obstacles, amount) {
		for (let i = 0; i < amount; i++) {
			this.path[this.getRandPos()] = new obstacles[getRandInt(obstacles.length)]();
		}
	};
	return Level;
})();
