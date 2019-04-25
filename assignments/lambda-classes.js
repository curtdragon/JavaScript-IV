// CODE here for your Lambda Classes


class Person {
    constructor(character) {
        this.createdAt = character.createdAt;
        this.name = character.name;
        this.dimensions = character.dimensions;
    }
    destroy() {
        return `${this.name} has been removed from the game.`;
    }
}

class Instructor extends Person {
    constructor(stats) {
        super(stats);
        this.healthPoints = stats.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}

class Student extends Instructor {
    constructor(stats) {
        super(stats);
        this.healthPoints = stats.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}

class ProjectManager extends Student {
    constructor(stats) {
        super(stats);
        this.healthPoints = stats.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}