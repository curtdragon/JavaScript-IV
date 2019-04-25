// CODE here for your Lambda Classes

//Default Person Class
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name} and I am from ${this.location}.`;
    }
}

//Instructor class
class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    gradeProject(student,subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

//Student Class
class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate(){
        return;
    }
}

//Project manager class
class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel stand up time!​​​;`
    }
    debugsCode(student,subject) {
        return `${this.name} debugs ${student.name}'s code in ${subject}`;
    }
}

//Creating student objects
const curtis = new Student({
    name: "Curtis Scafe",
    age: 38,
    location: "Nashville",
    gender: "Male",
    previousBackground: "IT Support",
    className:"WEBPT6",
    favSubjects:["Computer Science","Math","Anatomy"],
});

const amber = new Student({
    name: "Amber Pittman",
    age:1,
    location:"",
    gender: "",
    previousBackground:"",
    className:"",
    favSubjects: [],
});

const tyler = new Student({
    name:"Tyler Turnipseed",
    age:1,
    location:"",
    gender:"",
    previousBackground:"",
    className:"",
    favSubjects:[],
});

//Creating Instructor objects
const keiran = new Instructor({
    name: "Keiran Kozlowski",
    age:1,
    location:"",
    gender:"",
    specialty:"",
    favLanguage:"",
    catchPhrase: "I love hotdogs",
});

const dan = new Instructor({
    name: "Dan Frehner",
    age:1,
    location:"",
    gender:"",
    specialty:"",
    favLanguage:"",
    catchPhrase: "Do you like my hat?",
});

//Creating Project Manager objects
const abdul = new ProjectManager({
    name:"Abdul Ahmad",
    age:1,
    location:"",
    gender:"",
    specialty:"",
    favLanguage:"",
    catchPhrase: "",
    gradClassName:"",
    favInstructor:"",
});

const john = new ProjectManager({
    name:"John Benedict Miranda",
    age:1,
    location:"",
    gender:"",
    specialty:"",
    favLanguage:"",
    catchPhrase: "",
    gradClassName:"",
    favInstructor:"",
});

//Instructor testing
console.log(keiran.demo("React"));
console.log(dan.gradeProject(curtis, "Node.js"));
console.log(dan.catchPhrase);
console.log(keiran.favLanguage);

//Student testing
console.log(amber.PRAssignment("CSS"));
console.log(tyler.sprintChallenge("Redux"));
console.log(amber.favSubjects);
console.log(curtis.name);
console.log(curtis.speak());
console.log(curtis.listSubjects());

//PM Testing
console.log(abdul.standUp("Webpt6_sprint03"));
console.log(john.debugsCode(curtis,"JavaScript"));
console.log(abdul.gradClassName);
console.log(john.favInstructor);



