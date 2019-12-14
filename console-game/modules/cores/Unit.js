var Unit = (function() {
    /**
     * @param {Object} params Contains: hp, dmg, lvl
     */
    var Unit = function(params) {
        var lvlPercentModifier = (params.lvl - 1) / 10 + 1;
        this.hp = Math.round(params.hp * lvlPercentModifier);
        this.dmg = Math.round(params.dmg * lvlPercentModifier);
        this.lvl = params.lvl;
    };
    Unit.prototype.fight = /** @param {Integer} dmg What damage to cause to this Unit. @return Damage of this Unit */ function(dmg) {
        console.log(this);
        this.hp -= dmg;
        return this.dmg;
    };
    Unit.prototype.attack = /** @param {Unit} unit What unit to attack. @description Uses `fight` method of Unit to cause damage to passed `unit` and this Unit. */ function(unit) {
        var dmg = unit.fight(this.dmg);
        this.hp -= dmg;
    };
    return Unit;
}());