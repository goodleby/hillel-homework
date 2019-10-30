function numberify(array) {
    var result = [];
    for(var i = 0; i < array.length; i++) result.push(Number(array[i]));
    return result;
}
//Fully working function for averaging an array of numbers
function avg(array) {
    var result = 0
    for(var i = 0; i < array.length; i++) {
        result += array[i];
    }
    if(array.length > 0) return result / array.length;
    else {
        console.error('Function got an empty array');
        return NaN;
    }
}
//Firstly we will ask user through prompt for 2 numbers in a row
var a = Number(prompt('Type a first number', 0));
var b = Number(prompt('Type a second number', 0));
var array = [a, b];
alert('Average value of those two numbers is ' + avg(array));
//Secondly we will ask user to type many number separated by comma
var string = prompt('Type numbers separated by comma with no spaces between');
var array = numberify(string.trim().split(','));
alert('Average value of that list is ' + avg(array));