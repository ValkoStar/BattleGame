"use strict";
exports.__esModule = true;
exports.PlaySkill = void 0;
var PlaySkill = /** @class */ (function () {
    function PlaySkill() {
    }
    PlaySkill.prototype.simpleAttack = function (PlayerWhoHits, PlayerWhoIsHit) {
        PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getPlayerDamage());
    };
    PlaySkill.prototype.weakAttack = function (PlayerWhoHits, PlayerWhoIsHit) {
        PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getPlayerDamage() / 2);
    };
    PlaySkill.prototype.heavyAttack = function (PlayerWhoHits, PlayerWhoIsHit) {
        PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getPlayerDamage() * 2);
    };
    PlaySkill.prototype.riskyAttack = function (PlayerWhoHits, PlayerWhoIsHit) {
        var rand = Math.random();
        var trippleDamage = false;
        rand < 0.5 ? trippleDamage = true : trippleDamage = false;
        if (trippleDamage) {
            console.log("Doing tripple damage...");
            PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getPlayerDamage() * 3);
        }
        else {
            console.log("Attack unsuccessful");
        }
    };
    PlaySkill.prototype.heal = function (PlayerWhoHits) {
        //By passing "-" and value, we use the same function to substract from health (as damage does) and and health(as heal does)
        PlayerWhoHits.setPlayerHealth(-10);
    };
    PlaySkill.prototype.powerHeal = function (PlayerWhoHits) {
        PlayerWhoHits.setPlayerHealth(-20);
    };
    PlaySkill.prototype.counterAttack = function (PlayerWhoHits, PlayerWhoIsHit) {
        if (PlayerWhoHits.getDamageTaken() > 0) {
            PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getDamageTaken());
        }
    };
    PlaySkill.prototype.moveSkillinList = function (Player) {
        Player.moveSkillToLast();
        //Move skill to the end of player's skill list
        //Player.setPlayerSkills(Player.getAllPlayerSkills().push(Player.getAllPlayerSkills().shift()));
    };
    return PlaySkill;
}());
exports.PlaySkill = PlaySkill;
