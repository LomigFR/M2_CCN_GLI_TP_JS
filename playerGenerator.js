const getMyPlayerRatio = require('./playerUtils');
const fight = require('./playerUtils');

function displayMyPlayerInfo(){
    //console.log(this.name);
    console.log(this.name + " who has " + this.attack + " attack, " + this.defense + " defense and " + this.hp + " health points.");
}

function playerGenerator(name, attack, defense, hp){

    return {
        name: name,
        attack: attack,
        defense: defense,
        hp: hp,
        display: displayMyPlayerInfo,
        fight: fight
    }
}

module.exports = displayMyPlayerInfo;
module.exports = playerGenerator;