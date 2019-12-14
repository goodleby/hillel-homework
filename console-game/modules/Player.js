var Player = (function() {
    var Player = function(lvl) {
        var defs = {
            hp: 500,
            dmg: 45
        };
        Unit.call(this, {
            lvl: lvl,
            hp: defs.hp,
            dmg: defs.dmg
        });
    };
    Player.prototype = Object.create(Unit.prototype);
    Player.prototype.constructor = Player;
    Player.prototype.setPos = function(pos) {
        return this.pos = pos;
    }
    return Player;
}());