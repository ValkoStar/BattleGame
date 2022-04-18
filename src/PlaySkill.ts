import {Player} from "./Player";

export class PlaySkill{

    //A class to handle the skills in play time

    //On simple attack, pass the hitting player's damage points to the hit player
    public simpleAttack(PlayerWhoHits: Player, PlayerWhoIsHit: Player): void {
        PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getPlayerDamage());

    }

    //On weak attack, pass the hitting player's damage points split by two to the hit player
    public weakAttack(PlayerWhoHits: Player, PlayerWhoIsHit: Player): void {
        PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getPlayerDamage()/2);

    }

    //On heavy attack, pass the hitting player's damage points multiplied by two to the hit player
    public heavyAttack(PlayerWhoHits: Player, PlayerWhoIsHit: Player): void{
        PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getPlayerDamage()*2);
    }

    //On risky attack, calculate the chances of doing triple damage (50%) and if so, hit the other player doing triple damage
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

    //On heal, heal the player with 10 health
    public heal(PlayerWhoHits: Player)
    {
        //By passing "-" and value, we use the same function to substract from health (as damage does) and add health(as heal does)
        PlayerWhoHits.setPlayerHealth(-10);
    }

    //On power heal, heal the player with 20 heatl
    public powerHeal(PlayerWhoHits: Player)
    {
        PlayerWhoHits.setPlayerHealth(-20);
    }

    //On counter attack, check if the player has been hit the same turn, and if so do damage to other player
    public counterAttack(PlayerWhoHits: Player, PlayerWhoIsHit: Player): void{
        if(PlayerWhoHits.getDamageTaken() > 0)
        {
            PlayerWhoIsHit.setPlayerHealth(PlayerWhoHits.getDamageTaken());
        }

    }

    //On dodge. calculate chances of dodging the attack (50%) and if dodge is successful, apply shield so the player doesn't get any damage:
    public dodge(PlayerWhoHits: Player): void{
        const rand = Math.random()
        let dodgeSuccess = false;
        rand < 0.5 ? dodgeSuccess = true : dodgeSuccess = false;
        if(dodgeSuccess){
            console.log("Dodge successfull!");
            PlayerWhoHits.setShieldCondition(true);
        }
        else{
            console.log("Dodge unsuccessfull!")

        }
        
    }

    //Move skill to the end of player's skill list
    public moveSkillinList(Player: Player):void {

        Player.moveSkillToLast();
    }                        
}