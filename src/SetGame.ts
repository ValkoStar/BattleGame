import {Player} from "./Player";
import {StartGame} from "./StartGame";
export class SetGame{


  
   public createPlayers():void
   { 
        console.log("Creating two random Players...");
        const Player1 = new Player(1,this.generatePlayerDamage(),this.generatePlayerHealth());
        const Player2 = new Player(2,this.generatePlayerDamage(),this.generatePlayerHealth());  
        this.createPlayerSkills(Player1);
        this.createPlayerSkills(Player2);
        console.log("Player1 has " + Player1.getPlayerHealth() + " health points, " + Player1.getPlayerDamage() + " damage points and unique attack skills: " + Player1.getPlayerAttackSkills() + "; defense skills: " +  Player1.getPlayerDefenseSkills());
        console.log("Player2 has " + Player2.getPlayerHealth() + " health points, " + Player2.getPlayerDamage() + " damage points and unique attack skills: " + Player2.getPlayerAttackSkills() +"; defense skills: " + Player2.getPlayerDefenseSkills());
        new StartGame(Player1,Player2);
   }
   public createPlayerSkills(Player: Player): void {
    
        const attackSkills = ["simpleAttack","weakAttack","heavyAttack","riskyAttack"];
        const chosenAttackSkills = attackSkills.sort(() => .5 - Math.random()).slice(0, 2);
        Player.setPlayerAttackSkills(chosenAttackSkills);
        const defenseSkills = ["heal","powerHeal","shield","counterAttack","dodge"];
        const chosenDefenseSkills = defenseSkills.sort(() => .5 - Math.random()).slice(0, 2);
        Player.setPlayerDefenseSkills(chosenDefenseSkills);
   }    

   public generatePlayerHealth(): number {
       return (Math.floor(Math.random() * (10 - 20 + 1) + 10))*3;
   }

   public generatePlayerDamage(): number {
        return (Math.floor(Math.random() * (5 - 10 + 1) + 5))*1.5;
    }
}
