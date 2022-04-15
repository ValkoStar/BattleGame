import {Player} from "./Player";

export class PlaySkill{

    public simpleAttack(PlayerWhoHits: Player, PlayerWhoIsHit: Player): void {
        PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getPlayerDamage());

    }

    public weakAttack(PlayerWhoHits: Player, PlayerWhoIsHit: Player): void {
        PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getPlayerDamage()/2);

    }

    public heavyAttack(PlayerWhoHits: Player, PlayerWhoIsHit: Player): void{
        PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getPlayerDamage()*2);
    }

    public riskyAttack(PlayerWhoHits: Player, PlayerWhoIsHit: Player): void{
        const rand = Math.random()
        let trippleDamage = false;
        rand < 0.5 ? trippleDamage = true : trippleDamage = false;
        if (trippleDamage){
            console.log("Doing tripple damage...");
            PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getPlayerDamage()*3);
        }
        else{
            console.log("Attack unsuccessful");
        }

    }

    public heal(PlayerWhoHits: Player)
    {
        //By passing "-" and value, we use the same function to substract from health (as damage does) and and health(as heal does)
        PlayerWhoHits.setPlayerHealth(-10);
    }
    public powerHeal(PlayerWhoHits: Player)
    {
        PlayerWhoHits.setPlayerHealth(-20);
    }
    public counterAttack(PlayerWhoHits: Player, PlayerWhoIsHit: Player): void{
        if(PlayerWhoHits.getDamageTaken() > 0)
        {
            PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getDamageTaken());
        }

    }

    public moveSkillinList(Player: Player):void {

        Player.moveSkillToLast();
       //Move skill to the end of player's skill list
       //Player.setPlayerSkills(Player.getAllPlayerSkills().push(Player.getAllPlayerSkills().shift()));
    }                        
}