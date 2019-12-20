var Unit = (function() {
  /**
   * @param {Object} params Contains: hp, dmg, lvl
   */
  var Unit = function(params) {
    var lvlPercentModifier = this.getPercentModifier(params.lvl);
    this.maxHp = this.hp = Math.round(params.hp * lvlPercentModifier);
    this.dmg = Math.round(params.dmg * lvlPercentModifier);
    this.lvl = params.lvl;
  };
  Unit.prototype.levelUp = function() {
    var lvlPercentModifier = this.getPercentModifier(++this.lvl);
    var takenDamage = this.maxHp - this.hp;
    this.maxHp = this.hp = Math.round(this.defHp * lvlPercentModifier) - takenDamage;
    this.dmg = Math.round(this.defDmg * lvlPercentModifier);
  };
  Unit.prototype.getPercentModifier = function(lvl) {
    return (lvl - 1) / 20 + 1;
  };
  Unit.prototype.fight = function(dmg) {
    this.hp -= dmg;
    return this.dmg;
  };
  Unit.prototype.attack = function(unit) {
    var dmg = unit.fight(this.dmg);
    if (unit.hp > 0) this.hp -= dmg;
  };
  Unit.prototype.getCell = function() {
    var el = document.createElement('div');
    el.classList.add('unit');
    el.style.backgroundColor = '#b22234';
    el.dataset.hp = this.hp;
    el.dataset.dmg = this.dmg;
    el.innerHTML = 'HP: ' + this.hp + '\nDMG: ' + this.dmg;
    return el;
  };
  return Unit;
})();
