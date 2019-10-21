const playerGenerator = require('./playerGenerator');
const displayMyPlayerInfo = require('./playerGenerator');
const getMyPlayerRatio = require('./playerUtils');
const fight = require('./playerUtils');
const Player = require('./Player');
const PayToWinPlayer = require('./PayToWinPlayer');

// let playGen = playGen;
// let playUt = playUt;
// let name = "Conan";
// let attack = 30;
// let defense = 10;
// let hp = 100;
// playerGenerator("Rambo", 20, 5)
// player1.getMyPlayerRatio;
// player2.getMyPlayerRatio;

// let player1 = playerGenerator("Toto", 10, 8, 100);
// let player2 = playerGenerator("Titi", 15, 6, 100);

let player1 = new Player("Toto", 50, 8, 100);
let player2 = new Player("Titi", 15, 6, 100);

console.log(player1);


player1.fight(player2);

//player1.display();
//player2.display();

let player3 = new Player("Tutu", 40, 10, 100);

// Slides 19.x
// player3.say = function() {
//   console.log('Hi from ' + this.whoAmI());
// }

// console.log(Object.getPrototypeOf(player3))
// console.log(Object.getPrototypeOf(player3))
// console.log(Object.getPrototypeOf(player3) === Player.prototype);
// player3.say();

let player4 = new PayToWinPlayer("Tata", 60, 4, 100);

console.log(player4);

player3.fight(player4);