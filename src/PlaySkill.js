"use strict";
exports.__esModule = true;
exports.PlaySkill = void 0;
var PlaySkill = /** @class */ (function () {
    function PlaySkill() {
    }
    //A class to handle the skills in play time
    //On simple attack, pass the hitting player's damage points to the hit player
    PlaySkill.prototype.simpleAttack = function (PlayerWhoHits, PlayerWhoIsHit) {
        PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getPlayerDamage());
    };
    //On weak attack, pass the hitting player's damage points split by two to the hit player
    PlaySkill.prototype.weakAttack = function (PlayerWhoHits, PlayerWhoIsHit) {
        PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getPlayerDamage() / 2);
    };
    //On heavy attack, pass the hitting player's damage points multiplied by two to the hit player
    PlaySkill.prototype.heavyAttack = function (PlayerWhoHits, PlayerWhoIsHit) {
        PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getPlayerDamage() * 2);
    };
    //On risky attack, calculate the chances of doing triple damage (50%) and if so, hit the other player doing triple damage
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
    //On heal, heal the player with 10 health
    PlaySkill.prototype.heal = function (PlayerWhoHits) {
        //By passing "-" and value, we use the same function to substract from health (as damage does) and add health(as heal does)
        PlayerWhoHits.setPlayerHealth(-10);
    };
    //On power heal, heal the player with 20 heatl
    PlaySkill.prototype.powerHeal = function (PlayerWhoHits) {
        PlayerWhoHits.setPlayerHealth(-20);
    };
    //On counter attack, check if the player has been hit the same turn, and if so do damage to other player
    PlaySkill.prototype.counterAttack = function (PlayerWhoHits, PlayerWhoIsHit) {
        if (PlayerWhoHits.getDamageTaken() > 0) {
            PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getDamageTaken());
        }
    };
    //On dodge. calculate chances of dodging the attack (50%) and if dodge is successful, apply shield so the player doesn't get any damage:
    PlaySkill.prototype.dodge = function (PlayerWhoHits) {
        var rand = Math.random();
        var dodgeSuccess = false;
        rand < 0.5 ? dodgeSuccess = true : dodgeSuccess = false;
        if (dodgeSuccess) {
            console.log("Dodge successfull!");
            PlayerWhoHits.setShieldCondition(true);
        }
        else {
            console.log("Dodge unsuccessfull!");
        }
    };
    //Move skill to the end of player's skill list
    PlaySkill.prototype.moveSkillinList = function (Player) {
        Player.moveSkillToLast();
    };
    return PlaySkill;
}());
exports.PlaySkill = PlaySkill;
