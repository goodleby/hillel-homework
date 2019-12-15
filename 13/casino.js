/**
 * @param {Number} min 
 * @param {Number} max
 * @description Returns random Number between @param min and @param max (including both).
 *              If only one parameter is passed it will return random Number from 0 in range = passed parameter
 */
function getRandInt(min, max) {
    if(max === undefined) {max = min - 1; min = 0}
    return Math.floor(Math.random() * (max - min + 1) + min);
}



var casino = {
    lines: [],
    win: null,
    createRandLine: function(arr) {
        return arr.map(() => getRandInt(arr.length));
    },
    fillLines: function(linesAmount, fromArray) {
        return this.lines = Array(linesAmount).fill(1).map(() => this.createRandLine(fromArray));
    },
    horizontalMatch: function() {
        return this.lines[0].some((item, i) => this.lines.every(line => line[i] === item));
    },
    verticalMatch: function() {
        return this.lines.some(line => line.every((item, i, arr) => arr[i + 1] ? item === arr[i + 1] : true));
    },
    checkWin: function(horizontalMatch = true, verticalMatch = true) {
        return this.win = ((horizontalMatch && this.horizontalMatch()) || (verticalMatch && this.verticalMatch()));
    },
    stringifyLines: function() {
        return this.lines[0].map((item, i) => this.lines.map((line) => line[i]).join(' ') + '\n').join('');
    }
}



//Vertical test
casino.lines = [
    [1, 1, 1, 1, 1],
    [5, 2, 1, 3, 2],
    [2, 5, 1, 3, 4]
];
console.log(casino.stringifyLines());
console.log(casino.checkWin());

//Horizontal test
casino.lines = [
    [4, 2, 1, 5, 3],
    [5, 2, 1, 3, 2],
    [2, 5, 1, 3, 4]
];
console.log(casino.stringifyLines());
console.log(casino.checkWin());

//Regular random test
var values = [1, 2, 3, 4, 5];
casino.fillLines(3, values);
console.log(casino.stringifyLines());
console.log(casino.checkWin());