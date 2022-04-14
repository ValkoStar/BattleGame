"use strict";
exports.__esModule = true;
exports.AcquireSkills = void 0;
var AcquireSkills = /** @class */ (function () {
    function AcquireSkills() {
    }
    AcquireSkills.prototype.simpleAttack = function (PlayerWhoHits, PlayerWhoIsHit) {
        PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getPlayerDamage());
    };
    return AcquireSkills;
}());
exports.AcquireSkills = AcquireSkills;
