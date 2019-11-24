Array.prototype.accumulate = function(cb, startValue = 0) {
    var acc = startValue;
    for(var i = 0; i < this.length; i++) {
        acc = cb(acc, this[i], i, this);
    }
    return acc;
}

var grades = [12, 10, 11, 9, 7, 10, 11];
var avg = grades.accumulate((sum, item) => sum += item) / grades.length;
console.log(avg);