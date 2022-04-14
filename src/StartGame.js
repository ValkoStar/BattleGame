"use strict";
exports.__esModule = true;
exports.StartGame = void 0;
var Player_1 = require("./Player");
var StartGame = /** @class */ (function () {
    function StartGame() {
    }
    StartGame.prototype.createPlayers = function () {
        console.log("Creating two random Players...");
        var Player1 = new Player_1.Player(1, this.generatePlayerDamage(), this.generatePlayerHealth());
        var Player2 = new Player_1.Player(2, this.generatePlayerDamage(), this.generatePlayerHealth());
        console.log("Player1 has " + Player1.getPlayerHealth() + " health points and " + Player1.getPlayerDamage() + " damage points.");
        console.log("Player2 has " + Player2.getPlayerHealth() + " health points and " + Player2.getPlayerDamage() + " damage points.");
        return;
    };
    StartGame.prototype.generatePlayerHealth = function () {
        return (Math.floor(Math.random() * (10 - 20 + 1) + 10)) * 3;
    };
    StartGame.prototype.generatePlayerDamage = function () {
        return (Math.floor(Math.random() * (5 - 10 + 1) + 5) * 1.5);
    };
    return StartGame;
}());
exports.StartGame = StartGame;
