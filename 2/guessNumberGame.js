function getRandNum(min, max) {
    return Math.floor(Math.random() * (max + min) + min);
}
var attempts = 5;
function makeAnAttempt() {
    attempts--;
    var num = getRandNum(1, 10);
    var userGuess = Number(prompt('Try to guess number from 1 to 10'));
    return {actual: num, guessed: userGuess};
}
function game() {
    var result = makeAnAttempt();
    console.log('Actual was ' + result.actual);
    if(result.guessed === result.actual) alert('Totally! How did you do that??');
    else {
        if(attempts > 0) {
            if(confirm('Sorry... do you want to try again?')) game();
            else alert('Ok! Have a nice day!');
        } else alert('You\'re out of attempts!');
    }   
}
game();