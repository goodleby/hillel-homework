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
function getRandStr(len) {
    var __fn = arguments.callee;
    var str = '';
    for(var i = 0; i < len; i++) {
        str += __fn.alphabet[getRandInt(__fn.alphabet.length)];
    }
    return str;
}
getRandStr.alphabet = 'abcdefghijklmnopqrstuvwxyz';
function getRandWords(stringsAmount, minCharacters, maxCharacters) {
    var result = {};
    for(var i = 0; i < stringsAmount; i++) {
        var stringLength = getRandInt(maxCharacters, minCharacters);
        var str = getRandStr(stringLength);
        if(result[stringLength]) result[stringLength].push(str);
        else result[stringLength] = [str];
    }
    return result;
}



var stringsAmount = 20,//Number(prompt('What amount of strings do you need?')),
    minCharacters = 2,//Number(prompt('What is minimum of characters in a string?')),
    maxCharacters = 5;//Number(prompt('What is maximum of characters in a string?'));
var randWordsObj = getRandWords(stringsAmount, minCharacters, maxCharacters);
for(var key in randWordsObj) console.log('Added ' + randWordsObj[key].length + ' words with ' + key + ' characters');
console.log(randWordsObj);