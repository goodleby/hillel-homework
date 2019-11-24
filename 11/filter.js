Array.prototype.leaveOnlyReturnedByCallback = function(cb) {
    var filtered = [];
    for(var i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
};

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var fiveOrMoreCharacters = words.leaveOnlyReturnedByCallback(word => word.length > 6);
console.log(fiveOrMoreCharacters);