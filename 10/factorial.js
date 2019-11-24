var code = {
    negative_num: 'NEGATIVE_NUM'
}
function factorialOf(num) {
    return num > 1 ? num * factorialOf(num - 1) : num >= 0 ? 1 : code['negative_num'];
}

var inputNumber = 52;
console.log(factorialOf(inputNumber)); //Amount of diff combinations of regular deck of cards