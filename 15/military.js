var MilitaryResource = (function() {
    var MilitaryResource = function(type, health, distance) {
        this.type = type;
        this.maxHealth = this.health = health;
        this.maxDistance = this.distance = distance;
    };
    MilitaryResource.prototype.isReadyToMove = function() {
        return this.distance > 0;
    };
    MilitaryResource.prototype.isReadyToFight = function() {
        return this.health > 0;
    };
    MilitaryResource.prototype.restore = function() {
        this.health = this.maxHealth;
        this.distance = this.maxDistance;
        return true;
    };
    MilitaryResource.prototype.clone = function() {
        return new MilitaryResource(this.type, this.maxHealth, this.maxDistance);
    };
    return MilitaryResource;
}());
 


var Squad = (function() {
    var Squad = function(defaultResources) {
        this.squad = [];
        if(defaultResources) this.combineResources(defaultResources);
    };
    Squad.prototype.isReadyToMove = function() {
        return this.squad.every(item => item.distance > 0);
    };
    Squad.prototype.isReadyToFight = function() {
        return this.squad.every(item => item.health > 0);
    };
    Squad.prototype.restore = function() {
        this.squad.map(item => item.health = item.maxHealth);
        this.squad.map(item => item.distance = item.maxDistance);
        return true;
    };
    Squad.prototype.getReadyToMoveResources = function() {
        return this.squad.reduce((saved, item) => saved.distance > item.distance ? item : saved);
    };
    Squad.prototype.combineResources = function(defaultResources) {
        this.defaultResources = defaultResources;
        return this.squad = Array(4).fill(1).map(() => defaultResources.clone());
    };
    Squad.prototype.cloneResource = function() {
        return new Squad(this.defaultResources);
    };
    return Squad;
}());

/** NOTE
 * It was not clear what you expect to get from Squad.prototype.combineResources and Squad.prototype.getReadyToMoveResources
 * As I understood first has to generate whole squad from 1 military resource and second one has to find member that has the smallest distance counter.
 */