

console.log('we did it')

function Die() {
  this.value = 0
  this.roll()
}

Die.prototype = {
  roll: function() {
    this.value = Math.floor( Math.random() * 6 ) + 1
  },
  toHTML: function() {
    var htmlDie = document.createElement('div')
    htmlDie.innerText = this.value
    return htmlDie
  }
}


function DomTalker() { }

DomTalker.prototype = {
  render: function(dice) {
    for(var i = 0; i < dice.length; i++) {
      var die = dice[i]
      renderDie(die)
    }
  },
  renderDie: function(die) {
    var die = die.toHTML()
    var diceRack = document.querySelector('.dice')
    diceRack.appendChild(die)
  },
  getAddButton: function() {
    return document.querySelector('.add-button')
  },
  getRollButton: function() {
    return document.querySelector('.roll-button')
  }
}



function GameController(model,view) {
  this.Game = model
  this.View = view
}

GameController.prototype = {
  addDie: function() {
    this.Game.addDie()
    var dice = Game.diceRack
    this.View.render(dice)
  },
  rollDie: function() {
    this.Game.rollDie()
    var dice = Game.diceRack
    this.View.render(dice)
  },
  bindListeners: function() {
    var addButton = this.View.getAddButton()
    addButton.addEventListener('click',this.addDie.bind(this),false)

    var rollButton = this.View.getRollButton()
    rollButton.addEventListener('click',this.rollDie.bind(this),false)
  }
}


function Game(dieConstructor) {
  this.diceRack = []
  this.die = dieConstructor
}

Game.prototype = {
  addDie: function() {
    var die = new this.dieConstructor()
    this.diceRack.push(die)
  },
  rollDice: function() {
    var dice = this.diceRack
    for(var n = 0; n < dice.length; n ++) {
      dice[i].roll()
    }
  }
}




