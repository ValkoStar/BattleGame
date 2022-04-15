import {Player} from "./Player";
import {PlaySkill} from "./PlaySkill";
export class StartGame{



    constructor(Player1: Player, Player2: Player)
    {
        
        this.playGame(Player1,Player2);
        console.log("Da");
    }
    public playGame(Player1: Player, Player2: Player): void {
        console.log("Starting Game:")
        let turnsCounter = 0;
        while (turnsCounter < 5)//Player1.getPlayerHealth() > 0 && Player2.getPlayerHealth() > 0)
        {
            turnsCounter++;
            console.log("Turn " + turnsCounter);
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
            
            this.skillsHandler(Player1, Player2);
            this.skillsHandler(Player2, Player1);
           console.log("Player1 health: " + Player1.getPlayerHealth());
           console.log("Player2 health" + Player2.getPlayerHealth());
            
       }
    }
    
    public skillsHandler(PlayerPlaying: Player, OtherPlayer: Player): void{
        const playASkill = new PlaySkill();
        const playerSkillsList= PlayerPlaying.getAllPlayerSkills();
       // console.log("       " + playerSkillsList);
        switch (playerSkillsList[0]){

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
                console.log("Casting dodge skill on Player" + PlayerPlaying.getPlayerId());
                PlayerPlaying.setPlayerHealth(200);
                break;
                



        
        }

    }
}