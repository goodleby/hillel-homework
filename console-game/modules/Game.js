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
                size: 30,
                monsters: {
                    elements: [CrocoTurtle, CrayMonkey],
                    amount: 15
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
        renderElement.innerHTML = '';
        this.play = true;

        var cellNode = document.createElement('div');
        cellNode.classList.add('cell');

        if(this.player.pos < Math.floor(this.viewField / 2)) var startRenderPos = 0;
        else if(this.player.pos > this.level.path.length - 1 - Math.floor(this.viewField / 2)) var startRenderPos = this.level.path.length - this.viewField;
        else var startRenderPos = this.player.pos - Math.floor(this.viewField / 2);
        var view = Array(this.viewField).fill(1).map((item, i) => {
            var cell = this.level.path[startRenderPos + i];
            return {
                object: cell,
                text: cell instanceof Unit ? cell.constructor.name + ' (Hp:' + cell.hp + ', Dmg:' + cell.dmg + ')' : cell.constructor.name
            };
        });
        view.forEach((item) => {
            var cell = cellNode.cloneNode();
            cell.innerText = item.text;
            if(item.object instanceof Player) cell.classList.add('player');
            else if(item.object instanceof Unit) cell.classList.add('enemy');
            else if(item.object instanceof Obstacle) cell.classList.add('obstacle');
            else if(item.object instanceof Grass) cell.classList.add('grass');
            renderElement.append(cell);
        });
    };
    Game.prototype.handleDirection = function(direction) {
        switch(direction) {
            case 'left':
                if(this.player.pos > 0) {
                    if(this.level.path[this.player.pos - 1] instanceof Grass){
                        this.level.path[this.player.pos--] = new Grass();
                        this.level.path[this.player.pos] = this.player;
                        this.render(this.renderSelector);
                    } else {
                        console.log('You met ' + this.level.path[this.player.pos - 1].constructor.name);
                    }
                }
                else console.log('You cannot move left anymore!');
                break;
            case 'right':
                if(this.player.pos < this.level.path.length - 1) {
                    if(this.level.path[this.player.pos + 1] instanceof Grass){
                        this.level.path[this.player.pos++] = new Grass();
                        this.level.path[this.player.pos] = this.player;
                        this.render(this.renderSelector);
                    } else {
                        var enemy = this.level.path[this.player.pos + 1];
                        if(enemy instanceof Unit) {
                            this.player.attack(enemy);
                            if(this.player.hp <= 0) {
                                console.log('You lost :(');
                                this.play = false;
                            } else if(enemy.hp > 0) {
                                console.log('You attacked ' + enemy.constructor.name);
                            } else {
                                console.log('You defeated ' + enemy.constructor.name + '!');
                                this.level.path[this.player.pos++] = new Grass();
                                this.level.path[this.player.pos] = this.player;
                                this.player.levelUp();  
                            }
                            this.render(this.renderSelector);
                        } else if(enemy instanceof Obstacle) {
                            console.log('There\'s ' + enemy.constructor.name + ' on your way.');
                        }
                    }
                }
                else {
                    console.log('You completed the level! Congrats!');
                    this.play = false;
                }
                break;
            case 'up':
                console.log('jumped');
                break;
            case 'down':
                console.log('crouched');
                break;
        }
    };
    return Game;
}());