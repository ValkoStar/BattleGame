# Battle Game
 Simple turn-based battle game

## Run by ```npm start ```

The following flow should be defined in the application:

1. Create two random **Players**
2. For each **Player** generate random numeric values for these two stats: **Strength** (5-10) and **Constitution** (10-20)
3. Based on that each **Player** gets two attributes: **Damage** (Strength * 1.5) and **Health** (Constitution * 3)
4. Each **Player** should get a stack of 4 unique random **Skills** (2 attacks, 2 defence) out of the following pool:

Attacks:

- Simple attack: Does regular damage
- Weak attack: Does 50% damage
- Heavy attack: Does double damage
- Risky attack: 50% chance to do triple damage, 50% to do no damage

Defences:

- Heal: Restores 10 health
- Power Heal: Restores 20 health
- Shield: Prevent all damage done this turn
- Counterattack: If received damage this turn – do the same amount to your opponent
- Dodge: increase Miss chance of your opponent with 50% (to 60%)
1. Start the battle – each battle consists of **Turns**
2. On each **Turn** both opponents do the first **Skill** in their own list (both at the same time)
3. Apply **Damage** and change **Health** accordingly (new health = current health – damage) for both **Players**.

*NB: Take opponent **Skill** into account! (ex.: any attack vs Shield will do no damage)*

1. After a **Skill** is played, it moves to the end of the hero’s list of skills (will be played again in 4 turns)
2. Loop the turns until one of the **Players** has no **Health** left (the other one wins the battle)

## Author
Valeri Stoyanov [LinkedIn](https://www.linkedin.com/in/valeri-stoyanov/)
