//2nd task at 6th lesson (refactored after that lesson, thx)

var codes = {
    guessed: 'GUESSED',
    cancelled: 'CANCELLED',
    attempts: 'ATTEMPTS'
};
//min, max including both
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function play(num, maxAttempts) {
    console.log(num);
    var guessed,
        attempts = 0;
    do {
        var guess = prompt('Guess a number between 1 and 10 inclusive both');
        guessed = Number(guess) === num;
    } while(!guessed && guess !== null && ++attempts < maxAttempts);

    var leaveCode;
    if(guess === null) leaveCode = codes.cancelled;
    else if(attempts <= maxAttempts && !guessed) leaveCode = codes.attempts;
    else leaveCode = codes.guessed;
    return {
        guessed: guessed,
        code: leaveCode
    };
}
var result = play(getRandInt(1, 10), 3);
console.log(result);