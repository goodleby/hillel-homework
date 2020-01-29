const getDOM = htmlString => {
  let block = document.createElement('div');
  block.innerHTML = htmlString;
  let children = Array.from(block.children);
  return children.length > 1 ? children : children[0];
};

const shuffleArr = array => {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let randIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randIndex]] = [arr[randIndex], arr[i]];
  }
  return arr;
};

/**
 * @arg {number} successes - default = 1
 * @arg {number} fails - default = 1
 * @return Random boolean value with chance ratio = `successes` / `fails`
 * @description If no arguments is passed, it will return random boolean value with 50% / 50% chance for each
 */
const getRandBool = (successes = 1, fails = 1) =>
  Math.floor(Math.random() * (fails + successes)) >= fails;

/**
 * @arg {number} min
 * @arg {number} max
 * @return Random number between `min` and `max` (including both). If only one arg is passed, it will return random number from 0 in range = passed arg.
 */
const getRandNum = (min, max) =>
  max === undefined
    ? getRandNum(0, min - 1)
    : Math.floor(Math.random() * (max - min + 1) + min);

module.exports = {
  getDOM,
  shuffleArr,
  getRandBool,
  getRandNum
};
