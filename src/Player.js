"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(id, damage, health) {
        this.attackSkills = [];
        this.defenseSkills = [];
        this.skillsList = [];
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
    Player.prototype.setPlayerHealth = function (value) {
        if (value < 0 || !this.shield) {
            this.health = this.health - value;
            value > 0 ? this.damageTaken = value : 0;
        }
    };
    Player.prototype.setPlayerAttackSkills = function (attackSkills) {
        this.attackSkills = attackSkills;
    };
    Player.prototype.setPlayerDefenseSkills = function (defenseSkills) {
        this.defenseSkills = defenseSkills;
        this.skillsList = this.defenseSkills.concat(this.attackSkills);
        this.shuffleSkills();
    };
    Player.prototype.getPlayerDefenseSkills = function () {
        return this.defenseSkills;
    };
    Player.prototype.getPlayerAttackSkills = function () {
        return this.attackSkills;
    };
    Player.prototype.getAllPlayerSkills = function () {
        return this.skillsList;
    };
    Player.prototype.shuffleSkills = function () {
        var _a;
        for (var i = this.skillsList.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [this.skillsList[j], this.skillsList[i]], this.skillsList[i] = _a[0], this.skillsList[j] = _a[1];
        }
    };
    Player.prototype.moveSkillToLast = function () {
        this.skillsList.push(this.skillsList.shift());
    };
    Player.prototype.setPlayerSkills = function (skillsList) {
        this.skillsList = skillsList;
    };
    Player.prototype.setShieldCondition = function (condition) {
        this.shield = condition;
    };
    Player.prototype.getDamageTaken = function () {
        return this.damageTaken;
    };
    return Player;
}());
exports.Player = Player;
