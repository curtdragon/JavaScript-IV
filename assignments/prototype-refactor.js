/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject {
    constructor(character) {
        this.createdAt = character.createdAt;
        this.name = character.name;
        this.dimensions = character.dimensions;
    }
    destroy () {
        return `${this.name} has been removed from the game.`;
        }   
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject {
    constructor(stats) {
        super(stats);
        this.healthPoints = stats.healthPoints;
    }
    takeDamage () {
        return `${this.name} took damage.`;
    }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats {
    constructor (race) {
        super(race);
        this.team = race.team;
        this.weapons = race.weapons;
        this.language = race.language;
    }
    greet () {
    return `${this.name} offers greeting in ${this.language}.`;
    }
}

/*
 === Heroes and Villains (Greater stats than the regular units)===
  * entranceGreeting returns the string 'I am here to save the world' for villains  
  or 'I am here to detroy the world for heroes'
  *catchPhrase Heroes and Villains have their own catchphrases
  *heroes have more health
  *villains have more damage

*/

class Hero extends Humanoid {
    constructor (leader) {
        super(leader);
        this.healhPoints = leader.healthPoints;
        this.attackDamage = leader.attackDamage;    
    }
    catchPhrase() {
    return `I am ${this.name} and I am Jedi like my father before me!`;
    }
}

class Villain extends Humanoid {
    constructor(leader) {
        super(leader);
        this.healthPoints = leader.healthPoints;
        this.attackDamage = leader.attackDamage;
    }
    catchPhrase() {
    return `I am ${this.name} and I am your father. Search your heart, you know this to be true!`;
    }
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 50,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 150,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 100,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

const sith = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 3,
        height: 5,
    },
    healthPoints: 500,
    name: 'Darth Vader',
    team: 'Galactic Empire',
    weapons: [
        'The Force',
        'Light Saber',
    ],
    language: 'English',
    attackDamage: 5,
});

const jedi = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 3,
        height: 4,
    },
    healthPoints: 800,
    name: 'Luke Skywalker',
    team: 'Jedi Order',
    weapons: [
        'The Force',
        'Light Saber',
        'Blaster Pistol',
    ],
    language: 'English',
    attackDamage: 3,
})

console.log("Mage Created at: ", mage.createdAt); // Today's date
console.log("Archer Dimensions: ", archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log("Swordsman Healthpoints: ", swordsman.healthPoints); // 15
console.log("Mage's name: ", mage.name); // Bruce
console.log("Swordman's Team: ", swordsman.team); // The Round Table
console.log("Mage's weapons: ", mage.weapons); // Staff of Shamalama
console.log("Archer's language: ", archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log("Darth Vader's weapons",sith.weapons);
console.log("Luke's attack damage",jedi.attackDamage);
console.log(sith.catchPhrase());
console.log(jedi.catchPhrase());