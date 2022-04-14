import {Player} from "./Player";
import {AcquireSkills} from "./AcquireSkills";
export class StartGame{


  
   public createPlayers():void
   { 
        const p = new AcquireSkills();
        console.log("Creating two random Players...");
        const Player1 = new Player(1,this.generatePlayerDamage(),this.generatePlayerHealth());
        const Player2 = new Player(2,this.generatePlayerDamage(),this.generatePlayerHealth());
        console.log("Player1 has " + Player1.getPlayerHealth() + " health points and " + Player1.getPlayerDamage() + " damage points.");
        console.log("Player2 has " + Player2.getPlayerHealth() + " health points and " + Player2.getPlayerDamage() + " damage points.");
        p.simpleAttack(Player2,Player1);
        console.log("Player2 has " + Player1.getPlayerHealth())
   }

   public generatePlayerHealth(): number {
       return (Math.floor(Math.random() * (10 - 20 + 1) + 10))*3;
   }

   public generatePlayerDamage(): number {
        return (Math.floor(Math.random() * (5 - 10 + 1) + 5))*1.5;
    }
}
