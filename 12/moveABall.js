var Ball = function(settings) {
    var defaults = {
        element: null,
        x: 0,
        y: 0,
        time: 100,
        scale: 1,
        easing: 'linear'
    };
    var options = {...defaults, ...settings};
    for(var key in options) this[key] = options[key];
    this.updateAnimation();
};
Ball.prototype.move = function(direction, distance) {
    switch(direction) {
        case 'left':
            this.x -= distance;
            break;
        case 'right':
            this.x += distance;
            break;
        case 'up':
            this.y -= distance;
            break;
        case 'down':
            this.y += distance;
            break;
    }
    this.element.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px) scale(' + this.scale + ')';
};
Ball.prototype.updateAnimation = function() {
    this.element.style.transition = 'transform ' + this.time + 'ms ' + this.easing;
};
Ball.prototype.updateBallState = function() {
    this.element.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px) scale(' + this.scale + ')';
};
Ball.prototype.setAnimationTime = function(time) {
    this.time = time;
    this.updateAnimation();
};
Ball.prototype.setAnimationEasing = function(easing) {
    this.easing = easing;
    this.updateAnimation();
};
Ball.prototype.setScale = function(scale) {
    this.scale = scale;
    this.updateBallState();
};


var ball = new Ball({
    element: document.querySelector('.ball'),
    easing: document.querySelector('.easing').value,
    time: Number(document.querySelector('.time').value),
    scale: Number(document.querySelector('.scale').value)
});
var keys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
};
window.onkeydown = function(e) {
    var direction = keys[e.which];
    ball.move(direction, Number(document.querySelector('.distance').value));
};
document.querySelector('.time').addEventListener('keyup', function() {
    ball.setAnimationTime(Number(this.value));
});
document.querySelector('.easing').addEventListener('keyup', function() {
    ball.setAnimationEasing(this.value);
});
document.querySelector('.scale').addEventListener('keyup', function() {
    ball.setScale(Number(this.value));
});