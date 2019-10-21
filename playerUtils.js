const playerGenerator = require('./playerGenerator');
const displayMyPlayerInfo = require('./playerGenerator'); 

function getMyPlayerRatio(player, number){
    return player.attack - number;
}

function fight(player2){

    let ratioPlayer1 = getMyPlayerRatio(this, player2.defense);
    let ratioPlayer2 = getMyPlayerRatio(player2, this.defense);
    let playerWin;

    if(ratioPlayer1 > ratioPlayer2){
        playerWin = this;
        player2.hp = 0;
        this.hp -= ratioPlayer2*(this.hp/ratioPlayer1);
        playerWin.display();
    }
    else if(ratioPlayer1 < ratioPlayer2){
        playerWin = player2;
        this.hp = 0;
        player2.hp -= ratioPlayer1*(player2.hp/ratioPlayer2);
        playerWin.display();
    }
    else{
        console.log("Deuce")
    }
}

exports.getMyPlayerRatio = getMyPlayerRatio;
exports.fight = fight;
