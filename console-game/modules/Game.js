var Game = (function() {
    var Game = function(player) {
        this.player = player || new Player(1);
        this.play = false;
        this.initGameListeners();
        this.viewField = 5;
    };
    Game.prototype.initGameListeners = function() {
        var keys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        }
        window.addEventListener('keyup', (e) => {
            if(this.play) {
                var direction = keys[e.keyCode];
                this.handleDirection(direction);
            }
        });
    };
    Game.prototype.setViewField = function(viewField) {
        this.viewField = viewField;
    }
    Game.prototype.createLevel = function(levelIndex) {
        var levels = [
            {
                startPlayerPos: 0,
                size: 15,
                monsters: {
                    elements: [CrocoTurtle, CrayMonkey],
                    amount: 0
                },
                obstacles: {
                    elements: [Tree],
                    amount: 0
                }
            }
        ];
        this.levelIndex = levelIndex;
        if(this.levelIndex > levels.length) throw new Error('Attempt to initialize game with non existing level!');
        var levelOptions = levels[this.levelIndex - 1];
        this.player.setPos(levelOptions.startPlayerPos);
        this.level = new Level(levelOptions.size, this.player);
        this.level.spawnMonsters(levelOptions.monsters.elements, levelOptions.monsters.amount);
        this.level.spawnObstacles(levelOptions.obstacles.elements, levelOptions.obstacles.amount);
    };
    Game.prototype.render = function(selector) {
        this.renderSelector = selector;
        var renderElement = document.querySelector(this.renderSelector);
        this.play = true;

        var cellNode = document.createElement('div');
        cellNode.classList.add('cell');

        var startRenderPos = this.player.pos > Math.floor(this.viewField / 2) ? this.player.pos - Math.floor(this.viewField / 2) : 0;
        var view = Array(this.viewField).fill(1).map((item, i) => this.level.path[startRenderPos + i].constructor.name);
        view.forEach((item) => {
            var cell = cellNode.cloneNode();
            cell.innerText = item;
            renderElement.append(cell);
        });
    };
    Game.prototype.handleDirection = function(direction) {
        switch(direction) {
            case 'left':
                if(this.player.pos > 0) this.player.pos--;
                else console.log('You cannot move left now!');
                break;
            case 'right':
                if(this.player.pos < this.level.path.length - 1) this.player.pos++;
                else console.log('You cannot move right now!');
                break;
            case 'up':
                console.log('jumped');
                break;
            case 'down':
                console.log('crouched');
                break;
        }
        console.log('You met ' + this.level.path[this.player.pos].constructor.name);
        console.log(this.player.pos);
    };
    return Game;
}());