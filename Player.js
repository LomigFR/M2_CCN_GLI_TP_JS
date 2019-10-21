const playerUtils = require('./playerUtils')

/*function Player(name, attack, defense, hp){
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
}*/

class Player{
    constructor(name, attack, defense, hp){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
    }

    fight(player){
        let ratioPlayer1 = playerUtils.getMyPlayerRatio(this, player.defense);
        let ratioPlayer2 = playerUtils.getMyPlayerRatio(player, this.defense);
        let playerWin;

        if(ratioPlayer1 > ratioPlayer2){
            playerWin = this;
            player.hp = 0;
            this.hp -= ratioPlayer2*(this.hp/ratioPlayer1);
            console.log("And the winner is :");
            playerWin.display();
    }

    else if(ratioPlayer1 < ratioPlayer2){
        playerWin = player;
        this.hp = 0;
        player.hp -= ratioPlayer1*(player.hp/ratioPlayer2);
        console.log("The winner is...");
        playerWin.display();
    }

    else{
        console.log("Deuce")
    }
    }

    display(){
        console.log(this.name + " who has " + this.attack + " attack, " + this.defense + " defense and " + this.hp + " health points.");
    }
}

/*Player.prototype.fight = function (player){

    let ratioPlayer1 = playerUtils.getMyPlayerRatio(this, player.defense);
    let ratioPlayer2 = playerUtils.getMyPlayerRatio(player, this.defense);
    let playerWin;

    if(ratioPlayer1 > ratioPlayer2){
        playerWin = this;
        player.hp = 0;
        this.hp -= ratioPlayer2*(this.hp/ratioPlayer1);
        console.log("And the winner is :");
        playerWin.display();
    }
    else if(ratioPlayer1 < ratioPlayer2){
        playerWin = player;
        this.hp = 0;
        player.hp -= ratioPlayer1*(player.hp/ratioPlayer2);
        console.log("The winner is...");
        playerWin.display();
    }
    else{
        console.log("Deuce")
    }
}

Player.prototype.whoAmI = function(){
    return "I am " + this.name;
}

Player.prototype.display = function displayMyPlayerInfo(){
    console.log(this.name + " who has " + this.attack + " attack, " + this.defense + " defense and " + this.hp + " health points.");
}*/

module.exports = Player;
