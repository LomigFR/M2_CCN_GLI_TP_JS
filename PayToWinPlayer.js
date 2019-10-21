const Player = require('./Player');

// PayToWinPlayer.prototype = Object.create(Player.prototype);

class PayToWinPlayer extends Player {
    constructor(name, attack, defense, hp) {
        super(name + "IsCheated", 1.4*attack, defense, hp)
    }
}

0
/*function PayToWinPlayer(name, attack, defense, hp){
    this.name = name + "_isCheated";
    this.attack = 1.4*attack;
    this.defense = defense;
    this.hp = hp;
}*/

module.exports = PayToWinPlayer;