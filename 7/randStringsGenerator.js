//max, min (default = 0) excluding max
function getRandInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}
var stringsAmount = 20//Number(prompt('What amount of strings do you need?')),
    minCharacters = 2//Number(prompt('What is minimum of characters in a string?')),
    maxCharacters = 5//Number(prompt('What is maximum of characters in a string?'));
var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var result = {};
for(var i = 0; i < stringsAmount; i++) {
    var str = '';
    var stringLength = getRandInt(maxCharacters, minCharacters);
    for(var j = 0; j < stringLength; j++) {
        str += alphabet[getRandInt(26)];
    }
    if(result[stringLength]) result[stringLength].push(str);
    else result[stringLength] = [str];
}
for(var key in result) console.log('Added ' + result[key].length + ' words with ' + key + ' characters');
console.log(result);