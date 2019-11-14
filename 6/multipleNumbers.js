//3rd and 4th tasks at 6th lesson
//I decided to concatenate these tasks, because they are similar and 4th just has controllable by user amount of numbers being displayed

var multipleOf = 3,//Number(prompt('Multiples of what number you want to see?')),
    amountOfMultiples = 5,//Number(prompt('What amount of multiples of number ' + multipleOf + ' you want to see?')),
    result = [];
for(var i = 1; i <= amountOfMultiples; i++) {
    result.push(multipleOf * i);
    console.log(result[i - 1]);
}