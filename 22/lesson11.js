// Filter
console.log('--- FILTER ---');
Array.prototype.myFilter = function(callback) {
  const filtered = [];
  const array = this.slice();
  array.forEach(
    (element, index, array) => callback(element, index, array) && filtered.push(element)
  );
  return filtered;
};

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const fiveOrMoreCharacters = words.myFilter(word => word.length > 6);
console.log(fiveOrMoreCharacters);

// Reduce
console.log('--- REDUCE ---');
Array.prototype.myReduce = function(callback, startValue) {
  const array = this.slice();
  if (array.length === 0) {
    return startValue;
  }
  if (startValue === undefined) {
    startValue = array.shift();
  }
  let accumulator = startValue;
  array.forEach(
    (element, index, array) => (accumulator = callback(accumulator, element, index, array))
  );
  return accumulator;
};

var grades = [12, 10, 11, 9, 7, 10, 11];
var avg = grades.myReduce((sum, item) => (sum += item));
console.log(avg);

// Some
console.log('--- SOME ---');
Array.prototype.mySome = function(callback) {
  const array = this.slice();
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (callback(element, index, array)) return true;
  }
  return false;
};

var someEven = [1, 2, 3, 4, 5];
var noEven = [1, 3, 5, 7, 9];

const even = element => element % 2 === 0;
console.log(someEven.mySome(even));
console.log(noEven.mySome(even));
