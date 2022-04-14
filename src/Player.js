"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(id, damage, health) {
        this.id = id;
        this.damage = damage;
        this.health = health;
    }
    Player.prototype.getPlayerId = function () {
        return this.id;
    };
    Player.prototype.getPlayerHealth = function () {
        return this.health;
    };
    Player.prototype.getPlayerDamage = function () {
        return this.damage;
    };
    Player.prototype.setPlayerDamage = function (newDamage) {
        this.damage = newDamage;
    };
    Player.prototype.setPlayerHealth = function (damage) {
        this.health = this.health - damage;
    };
    return Player;
}());
exports.Player = Player;
