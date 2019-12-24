var Game = (function() {
  var levels = [
    {
      startPlayerPos: 0,
      size: 14,
      monsters: {
        elements: [CrocoTurtle, CrayMonkey],
        amount: 3
      },
      obstacles: {
        elements: [Tree],
        amount: 0
      }
    },
    {
      startPlayerPos: 0,
      size: 14,
      monsters: {
        elements: [CrocoTurtle, CrayMonkey],
        amount: 4
      },
      obstacles: {
        elements: [Tree],
        amount: 0
      }
    },
    {
      startPlayerPos: 0,
      size: 14,
      monsters: {
        elements: [CrocoTurtle, CrayMonkey],
        amount: 5
      },
      obstacles: {
        elements: [Tree],
        amount: 0
      }
    }
  ];
  var Game = function(renderSelector, player) {
    this.levels = levels;
    this.renderSelector = renderSelector;
    this.player = player || new Player(1);
    this.play = false;
    this.initGameListeners();
  };
  Game.prototype.initGameListeners = function() {
    var keys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    };
    window.addEventListener('keyup', e => {
      if (this.play) {
        var direction = keys[e.keyCode];
        this.handleDirection(direction);
      }
    });
  };
  Game.prototype.setViewField = function(viewField) {
    this.viewField = viewField > 0 ? viewField : this.level.path.length;
  };
  Game.prototype.startLevel = function(levelIndex) {
    this.levelIndex = levelIndex;
    if (this.levelIndex > this.levels.length)
      throw new Error('Attempt to initialize game with non existing level!');
    var levelOptions = this.levels[this.levelIndex - 1];
    this.player.setPos(levelOptions.startPlayerPos);
    this.level = new Level(levelOptions.size, this.player);
    this.level.spawnMonsters(levelOptions.monsters.elements, levelOptions.monsters.amount);
    this.level.spawnObstacles(levelOptions.obstacles.elements, levelOptions.obstacles.amount);
    this.viewField = this.viewField || levelOptions.size;
    this.render();
    this.play = true;
  };
  Game.prototype.render = function() {
    var el = document.querySelector(this.renderSelector);
    el.innerHTML = '';

    var cellNode = document.createElement('div');
    cellNode.classList.add('cell');

    if (this.player.pos < Math.floor(this.viewField / 2)) var startRenderPos = 0;
    else if (this.player.pos > this.level.path.length - 1 - Math.floor(this.viewField / 2))
      var startRenderPos = this.level.path.length - this.viewField;
    else var startRenderPos = this.player.pos - Math.floor(this.viewField / 2);
    var view = Array(this.viewField)
      .fill(1)
      .map((item, i) => this.level.path[startRenderPos + i]);
    view.forEach(item => {
      var cell = cellNode.cloneNode();
      cell.append(item.getCell());
      el.append(cell);
    });
  };
  Game.prototype.handleDirection = function(direction) {
    switch (direction) {
      case 'left':
        this.actionLeft();
        break;
      case 'right':
        this.actionRight();
        break;
      case 'up':
        this.actionUp();
        break;
      case 'down':
        this.actionDown();
        break;
    }
  };
  Game.prototype.playerMove = function(pos) {
    this.level.path[this.player.pos] = new Grass();
    this.player.pos = pos;
    this.level.path[pos] = this.player;
  };
  Game.prototype.playerFight = function(cellPos) {
    var unit = this.level.path[cellPos];
    this.player.attack(unit);
    if (this.checkLose()) return;
    if (unit.hp > 0) {
      console.log('You attacked ' + unit.constructor.name);
    } else {
      this.level.path[cellPos] = new Grass();
      console.log('You defeated ' + unit.constructor.name);
      if (getRandBool(1, this.player.lvl)) this.player.levelUp();
    }
  };
  Game.prototype.handleCell = function(cellPos) {
    var cell = this.level.path[cellPos];
    if (cell instanceof Grass) {
      this.playerMove(cellPos);
    } else if (cell instanceof Unit) {
      this.playerFight(cellPos);
    } else if (cell instanceof Obstacle) {
      console.log("There's an obstacle in front of you!");
    }
    this.render();
  };
  Game.prototype.actionRight = function() {
    if (this.checkWin()) return;
    this.handleCell(this.player.pos + 1);
  };
  Game.prototype.actionLeft = function() {
    if (this.checkWin()) return;
    this.handleCell(this.player.pos - 1);
  };
  Game.prototype.actionUp = function() {
    console.log('jumped');
  };
  Game.prototype.actionDown = function() {
    console.log('crouched');
  };
  Game.prototype.checkWin = function() {
    if (this.player.pos < this.level.path.length - 1) return false;
    else {
      this.win();
      return true;
    }
  };
  Game.prototype.checkLose = function() {
    if (this.player.hp > 0) return false;
    else {
      this.lose();
      return true;
    }
  };
  Game.prototype.win = function() {
    this.play = false;
    var self = this;
    self = new Game(this.renderSelector, this.player);
    if (this.levels[this.levelIndex]) game.startLevel(this.levelIndex + 1);
    else alert('You won!');
  };
  Game.prototype.lose = function() {
    this.play = false;
    alert('You lost :(');
  };
  return Game;
})();
