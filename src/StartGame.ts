import {Player} from "./Player";
import {PlaySkill} from "./PlaySkill";
export class StartGame{

    //A class to start the game and handle the game flow:
    constructor(Player1: Player, Player2: Player)
    {        
        this.playGame(Player1,Player2);
    }

    public playGame(Player1: Player, Player2: Player): void {
        console.log("Starting Game:")
        let turnsCounter = 0;

        //Loop until one of the players is destroyed
        while (Player1.getPlayerHealth() > 0 && Player2.getPlayerHealth() > 0)
        {
            turnsCounter++;
            console.log("Turn " + turnsCounter);

            //Check if the next skill in some of the players is shield and cast it in advance
            //So the player doesn't receive any damage from the other one
            if(Player1.getAllPlayerSkills()[0] == "shield")
            {
                Player1.setShieldCondition(true);
            }
            else{
                Player1.setShieldCondition(false);
            }
            if(Player2.getAllPlayerSkills()[0] == "shield")
            {
                Player2.setShieldCondition(true);
            }
            else{
                Player2.setShieldCondition(false);
            }
            
            //Invoke skills handler 2 times: one for Player1 as playing player, next for Player2 as playing player:
            this.skillsHandler(Player1, Player2);
            this.skillsHandler(Player2, Player1);

            //Displays both players current health:
            console.log("Player1 remaining health: " + Player1.getPlayerHealth());
            console.log("Player2 remaining health: " + Player2.getPlayerHealth());   
       }

       //Once it moves out of the loop, the game has ended, and corrispondingly displays the winener:
       console.log("Game ended!");
       if(Player1.getPlayerHealth() <= 0){
           console.log("Winner is Player2 with remaining health: " + Player2.getPlayerHealth());
       }
       else{
           console.log("Winner is Player1 with remaining health: " + Player1.getPlayerHealth());
           
       }
    }
    
    public skillsHandler(PlayerPlaying: Player, OtherPlayer: Player): void{

        //A method to correspondingly act based on player's skills 
        //after the attack is done, move the attack to the end of the player's skill list
        const playASkill = new PlaySkill();
        const playerSkillsList= PlayerPlaying.getAllPlayerSkills(); 
        switch (playerSkillsList[0]){  //Always checks the first item in the list, since it changes after the attack is done

            case "simpleAttack": 
                console.log("Casting simple attack on Player" + PlayerPlaying.getPlayerId());
                playASkill.simpleAttack(PlayerPlaying,OtherPlayer);
                playASkill.moveSkillinList(PlayerPlaying);
                break;
            case "weakAttack":
                console.log("Casting weak attack on Player" + PlayerPlaying.getPlayerId());
                playASkill.weakAttack(PlayerPlaying,OtherPlayer);
                playASkill.moveSkillinList(PlayerPlaying);
                break;
            case "heavyAttack":
                console.log("Casting heavy attack on Player" + PlayerPlaying.getPlayerId());
                playASkill.heavyAttack(PlayerPlaying,OtherPlayer);
                playASkill.moveSkillinList(PlayerPlaying);
                break;
            case "riskyAttack": 
                console.log("Casting risky attack on Player" + PlayerPlaying.getPlayerId());
                playASkill.riskyAttack(PlayerPlaying,OtherPlayer);
                playASkill.moveSkillinList(PlayerPlaying);
                break;
            case "heal": 
                console.log("Casting heal skill on Player" + PlayerPlaying.getPlayerId());
                playASkill.heal(PlayerPlaying);
                playASkill.moveSkillinList(PlayerPlaying);
                break;
            case "powerHeal":
                console.log("Casting power heal skill on Player" + PlayerPlaying.getPlayerId());
                playASkill.powerHeal(PlayerPlaying);
                playASkill.moveSkillinList(PlayerPlaying);
                break;
            case "shield":
                console.log("Casting shield skill on Player" + PlayerPlaying.getPlayerId());
                playASkill.moveSkillinList(PlayerPlaying);
                break;
            case "counterAttack":
                console.log("Casting counter attack skill on Player" + PlayerPlaying.getPlayerId());
                playASkill.counterAttack(PlayerPlaying,OtherPlayer);
                playASkill.moveSkillinList(PlayerPlaying);
                break;
            case "dodge":
                console.log("Casting dodge skill by Player" + PlayerPlaying.getPlayerId());
                playASkill.dodge(PlayerPlaying);
                playASkill.moveSkillinList(PlayerPlaying);
                break;
                
        }

    }
}