import {getDOM} from './functions.js';
export const Starship = (function() {
  return class Starship {
    constructor(starshipJson) {
      const {
        name,
        cost_in_credits: cost,
        length,
        crew,
        passengers,
        consumables
      } = starshipJson;
      this.name = name;
      this.cost = cost;
      this.length = length;
      this.crew = crew;
      this.passengers = passengers;
      this.consumables = consumables;
    }
    renderCard(selectorOrElement) {
      const el =
        selectorOrElement instanceof Element
          ? selectorOrElement
          : document.querySelector(selectorOrElement);
      const card = getDOM(`
        <div class="starship">
          <div class="starship__name">${this.name}</div>
          <div class="starship__cost">${this.cost} credits</div>
          <div class="starship__length">length: ${this.length}m</div>
          <div class="starship__crew">crew: ${this.crew}</div>
          <div class="starship__passengers">passengers: ${this.passengers}</div>
          <div class="starship__consumables">food for: ${this.consumables}</div>
        </div>
      `);
      el.append(card);
    }
  };
})();
