function number(data) {
    return data.map((item, i) => i + ': ' + item);
}

var inputData = [
    '<!DOCTYPE html>',
    '<html lang="en">',
    '<head>',
    '    <meta charset="UTF-8">',
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '    <meta http-equiv="X-UA-Compatible" content="ie=edge">',
    '    <title>Document</title>',
    '</head>',
    '<body>',
    '',
    '</body>',
    '</html>'
];
var lines = number(inputData);
console.log(lines);

var inputData = [];
var lines = number(inputData);
console.log(number(inputData));