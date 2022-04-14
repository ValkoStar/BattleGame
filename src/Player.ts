export class Player {
    id;
    damage;
    health;

    constructor(id, damage, health) {
        this.id = id;
        this.damage = damage;
        this.health = health;
    }

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
    setPlayerHealth(damage){
        this.health = this.health - damage;
    }
}