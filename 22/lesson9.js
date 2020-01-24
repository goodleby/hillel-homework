const makeLines = array => array.map((item, i) => i + ': ' + item);
const consoleLines = array => array.forEach(item => console.log(item));

const inputData = [
  `<!DOCTYPE html>`,
  `<html lang="en">`,
  `<head>`,
  `    <meta charset="UTF-8">`,
  `    <meta name="viewport" content="width=device-width, initial-scale=1.0">`,
  `    <meta http-equiv="X-UA-Compatible" content="ie=edge">`,
  `    <title>Document</title>`,
  `</head>`,
  `<body>`,
  ``,
  `</body>`,
  `</html>`
];
const lines = makeLines(inputData);
consoleLines(lines);

const inputData1 = [];
const lines1 = makeLines(inputData1);
consoleLines(lines1);