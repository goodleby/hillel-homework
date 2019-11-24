Array.prototype.atLeastOneIsTrueFor = function(cb) {
    for(var i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) return true;
    }
    return false;
};

var someEven = [1, 2, 3, 4, 5];
var noEven = [1, 3, 5, 7, 9];

const even = (element) => element % 2 === 0;
console.log(someEven.atLeastOneIsTrueFor(even));
console.log(noEven.atLeastOneIsTrueFor(even))