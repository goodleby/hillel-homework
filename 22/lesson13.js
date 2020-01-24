const getRandNum = (min, max) =>
  max === undefined
    ? getRandNum(0, min - 1)
    : Math.floor(Math.random() * (max - min + 1) + min);

const casino = {
  lines: [],
  win: null,
  createRandLine(arr) {
    return arr.map(() => getRandInt(arr.length));
  },
  fillLines(linesAmount, fromArray) {
    return (this.lines = Array(linesAmount)
      .fill(1)
      .map(() => this.createRandLine(fromArray)));
  },
  horizontalMatch() {
    return this.lines[0].some((item, i) => this.lines.every(line => line[i] === item));
  },
  verticalMatch() {
    return this.lines.some(line =>
      line.every((item, i, arr) => (arr[i + 1] ? item === arr[i + 1] : true))
    );
  },
  checkWin(horizontalMatch = true, verticalMatch = true) {
    return (this.win =
      (horizontalMatch && this.horizontalMatch()) || (verticalMatch && this.verticalMatch()));
  },
  stringifyLines() {
    return this.lines[0]
      .map((item, i) => this.lines.map(line => line[i]).join(' ') + '\n')
      .join('');
  }
};

//Vertical test
casino.lines = [
  [1, 1, 1, 1, 1],
  [5, 2, 4, 3, 2],
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
