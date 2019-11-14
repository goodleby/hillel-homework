//max, min (default = 0) excluding max
function getRandInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}
function getRandStr(len) {
    var str = '';
    for(var i = 0; i < len; i++) {
        str += alphabet[getRandInt(26)];
    }
    return str;
}
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
var stringsAmount = 20//Number(prompt('What amount of strings do you need?')),
    minCharacters = 2//Number(prompt('What is minimum of characters in a string?')),
    maxCharacters = 5//Number(prompt('What is maximum of characters in a string?'));
var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var randWordsObj = getRandWords(stringsAmount, minCharacters, maxCharacters);
for(var key in randWordsObj) console.log('Added ' + randWordsObj[key].length + ' words with ' + key + ' characters');
console.log(randWordsObj);