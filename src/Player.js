"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(id, damage, health) {
        this.id = id;
        this.damage = damage;
        this.health = health;
    }
    Player.prototype.getPlayerHealth = function () {
        return this.health;
    };
    Player.prototype.getPlayerDamage = function () {
        return this.damage;
    };
    return Player;
}());
exports.Player = Player;
