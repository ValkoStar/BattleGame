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
}