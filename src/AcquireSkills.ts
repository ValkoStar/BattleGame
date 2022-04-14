import {Player} from "./Player";

export class AcquireSkills{

    
    public simpleAttack(PlayerWhoHits: Player, PlayerWhoIsHit: Player): void {
        PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getPlayerDamage());
    }
}