/**
 * @param {Number} min
 * @param {Number} max
 * @description Returns random Number between @param min and @param max (including both).
 *              If only one parameter is passed it will return random Number from 0 in range = passed parameter
 */
function getRandInt(min, max) {
  if (max === undefined) {
    max = min - 1;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * @param {Number} successes
 * @param {Number} fails
 * @description Get random boolean value with chance = succeses / fails (ratio)
 */
function getRandBool(successes, fails) {
  return Math.floor(Math.random() * (fails + successes)) >= fails;
}