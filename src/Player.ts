export class Player {
    
    //A class to represent the player:

    id;
    damage;
    health;
    attackSkills = [];
    defenseSkills = [];
    skillsList = [];
    shield: boolean;
    damageTaken;
    constructor(id, damage, health) {
        this.id = id;
        this.damage = damage;
        this.health = health;
    }

    //Getters and setters for the player:
    getPlayerId(){
        return this.id;
    }
    
    getPlayerHealth(){
        return this.health;
    }

    getPlayerDamage(){
        return this.damage;
    }

    setPlayerDamage(newDamage){
        this.damage = newDamage;
    }

    setPlayerHealth(value){
        if(value < 0 || !this.shield){
        this.health = this.health - value;
        value > 0 ? this.damageTaken = value : 0;
        }
    }

    setPlayerAttackSkills(attackSkills){
        this.attackSkills = attackSkills;
    }

    setPlayerDefenseSkills(defenseSkills){
        this.defenseSkills = defenseSkills;
        this.skillsList = this.defenseSkills.concat(this.attackSkills);

        //After the defense and attack skills are chosen, shuffle the skills:
        this.shuffleSkills();
    }

    getPlayerDefenseSkills(){
        return this.defenseSkills;
    }

    getPlayerAttackSkills(){
        return this.attackSkills;
    }

    getAllPlayerSkills(){  
        return this.skillsList;
    }

    shuffleSkills(){
        console.log(("Shuffling Player") + this.id + ("'s skills..."));
        for (let i = this.skillsList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.skillsList[i], this.skillsList[j]] = [this.skillsList[j], this.skillsList[i]];
        }
    }
    moveSkillToLast(){
        //Move skill to the end of the skills list so it could be played again in 4 turns:
        this.skillsList.push(this.skillsList.shift());
    }

    setPlayerSkills(skillsList){
        this.skillsList = skillsList;
    }

    setShieldCondition(condition){
        this.shield = condition;
    }

    getDamageTaken(){
        return this.damageTaken;
    }
    
}