var runner = {
    $$runnerId: null,
    $$tasks: [],
    repeats: true, //infinite
    setSpeed: function (speed) {
        this.stop();
        this.start(speed);
    },
    add: function (task) {
        this.$$tasks.push(task);
    },
    start: function (speed) {
        var _this = this;
        this.$$runnerId = setTimeout(function callback() {
            if(_this.repeats-- <= 0) return;
            _this.$$tasks.forEach(function (item) {
                item();
            });
            _this.$$runnerId = setTimeout(callback, speed);
        }, speed);
    },
    stop: function () {
        clearTimeout(this.$$runnerId);
    },
    setRepeats: function(amount) {
        this.repeats = amount;
    }
}

/**Start */
runner.add(function() {
    console.log('Hello');
});
runner.add(function() {
    console.log('World');
});
runner.setRepeats(3);
runner.setSpeed(2000);