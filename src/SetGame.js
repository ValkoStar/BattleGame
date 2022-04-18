"use strict";
exports.__esModule = true;
exports.SetGame = void 0;
var Player_1 = require("./Player");
var StartGame_1 = require("./StartGame");
var SetGame = /** @class */ (function () {
    function SetGame() {
    }
    //A class to set/prepare the game:
    SetGame.prototype.createPlayers = function () {
        //Create 2 random players with health and damage calculated based on strength and constitution:
        console.log("Creating two random Players...");
        var Player1 = new Player_1.Player(1, this.generatePlayerDamage(), this.generatePlayerHealth());
        var Player2 = new Player_1.Player(2, this.generatePlayerDamage(), this.generatePlayerHealth());
        this.createPlayerSkills(Player1);
        this.createPlayerSkills(Player2);
        console.log("Player1 has " + Player1.getPlayerHealth() + " health points, " + Player1.getPlayerDamage() + " damage points and unique attack skills: " + Player1.getPlayerAttackSkills() + "; defense skills: " + Player1.getPlayerDefenseSkills());
        console.log("Player2 has " + Player2.getPlayerHealth() + " health points, " + Player2.getPlayerDamage() + " damage points and unique attack skills: " + Player2.getPlayerAttackSkills() + "; defense skills: " + Player2.getPlayerDefenseSkills());
        //After the game is set; start game:
        new StartGame_1.StartGame(Player1, Player2);
    };
    SetGame.prototype.createPlayerSkills = function (Player) {
        //Randomly choose 4 player skills (2 for attack, 2 for defense)
        var attackSkills = ["simpleAttack", "weakAttack", "heavyAttack", "riskyAttack"];
        var chosenAttackSkills = attackSkills.sort(function () { return .5 - Math.random(); }).slice(0, 2);
        Player.setPlayerAttackSkills(chosenAttackSkills);
        var defenseSkills = ["heal", "powerHeal", "shield", "counterAttack", "dodge"];
        var chosenDefenseSkills = defenseSkills.sort(function () { return .5 - Math.random(); }).slice(0, 2);
        Player.setPlayerDefenseSkills(chosenDefenseSkills);
    };
    SetGame.prototype.generatePlayerHealth = function () {
        return (Math.floor(Math.random() * (10 - 20 + 1) + 10)) * 3;
    };
    SetGame.prototype.generatePlayerDamage = function () {
        return (Math.floor(Math.random() * (5 - 10 + 1) + 5)) * 1.5;
    };
    return SetGame;
}());
exports.SetGame = SetGame;
