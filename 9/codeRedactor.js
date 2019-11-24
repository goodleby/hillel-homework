function makeNormalNumerizationForArray(inputArray) {
    var newArr = [];
    var newIndex = 1;
    inputArray.forEach(function(item) {
        newArr[newIndex++] = item;
    });
    return newArr;
}

var inputData = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'];
console.log(inputData, makeNormalNumerizationForArray(inputData));