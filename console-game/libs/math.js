/**
 * @arg {number} min
 * @arg {number} max
 * @return Random number between `min` and `max` (including both). If only one arg is passed, it will return random number from 0 in range = passed arg.
 */
function getRandInt(min, max) {
  if (max === undefined) {
    max = min - 1;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * @arg {number} successes - default = 1
 * @arg {number} fails - default = 1
 * @return Random boolean value with chance ratio = `successes` / `fails`
 */
function getRandBool(successes = 1, fails = 1) {
  return Math.floor(Math.random() * (fails + successes)) >= fails;
}
