Array.prototype.accumulate = function(cb, startValue) {
    if(this.length === 0 && startValue !== undefined) return startValue;
    if(this.length !== 0 && startValue === undefined) {
        startValue = this[0];
        var iMod = 1;
    }
    var acc = startValue;
    for(var i = iMod ? iMod : 0; i < this.length; i++) {
        acc = cb(acc, this[i], i, this);
    }
    return acc;
}



var grades = [12, 10, 11, 9, 7, 10, 11];
var avg = grades.accumulate((sum, item) => sum += item) / grades.length;
console.log(avg);