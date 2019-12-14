/**
 * @param {integer} min 
 * @param {integer} max
 * @description Returns random integer between @param min and @param max (including both).
 *              If only one parameter is passed it will return random integer from 0 in range = passed parameter
 */
function getRandInt(min, max) {
    if(max === undefined) {max = min - 1; min = 0}
    return Math.floor(Math.random() * (max - min + 1) + min);
}