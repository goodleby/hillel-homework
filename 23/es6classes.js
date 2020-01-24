class MilitaryResource {
  constructor(type, health, distance) {
    this.type = type;
    this.maxHealth = this.health = health;
    this.maxDistance = this.distance = distance;
  }
  isReadyToMove() {
    return this.distance > 0;
  }
  isReadyToFight() {
    return this.health > 0;
  }
  restore() {
    this.distance = this.maxDistance;
    this.health = this.maxHealth;
    return true;
  }
  clone() {
    return MilitaryResource(this.type, this.maxHealth, this.maxDistance);
  }
}

class Squad {
  constructor(defaultResources) {
    this.squad = [];
    this.defaultResources = defaultResources;
    if (this.defaultResources) this.combineResources(this.defaultResources);
  }
  isReadyToMove() {
    return this.squad.every(item => item.distance > 0);
  }
  isReadyToFight() {
    return this.squad.every(item => item.health > 0);
  }
  restore() {
    this.squad.forEach(item => item.restore());
    return true;
  }
  getReadyToMoveResources() {
    return this.squad.reduce((saved, item) => (saved.distance > item.distance ? item : saved));
  }
  combineResources(defaultResources) {
    this.squad = Array(4)
      .fill(1)
      .map(() => defaultResources.clone());
  }
  cloneResource() {
    return new Squad(this.defaultResources);
  }
}
