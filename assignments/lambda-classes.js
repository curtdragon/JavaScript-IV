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
    tallyGrade(student) {
        return student.grade += (Math.floor(Math.random() * 10)+1);
    }
}

//Student Class
class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = Math.floor(Math.random() * 100) + 1;
    }
    listSubjects() {
        console.log(`${this.name}'s favorite subjects: `);
        for (let i= 0; i<this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        };
    }
    
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate(){
        if (this.grade > 70){
            return "Graduated";
        }
        else return "Keep going"
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
        return `${this.name} announces to ${channel}, @channel stand up time!​​​`;
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
    age:26,
    location:"Atlanta, Georgia",
    gender: "Female",
    previousBackground:"Travel Blogger",
    className:"WEBPT6",
    favSubjects: ["Math","Computer Science","Cooking"],
});

const tyler = new Student({
    name:"Tyler Turnipseed",
    age:25,
    location:"Avon, IN",
    gender:"Male",
    previousBackground:"Field Technician",
    className:"WEBPT6",
    favSubjects:["Math","Physics","Biology"],
});

//Creating Instructor objects
const keiran = new Instructor({
    name: "Keiran Kozlowski",
    age:22,
    location:"The Fields of Jusctice",
    gender:"Male",
    specialty:"JavaScript",
    favLanguage:"JavaScript",
    catchPhrase: "I love hotdogs",
});

const dan = new Instructor({
    name: "Dan Frehner",
    age:30,
    location:"Jackson, WY",
    gender:"Male",
    specialty:"React",
    favLanguage:"JavaScript",
    catchPhrase: "Do you like my hat?",
});

//Creating Project Manager objects
const abdul = new ProjectManager({
    name:"Abdul Ahmad",
    age:30,
    location:"Washington DC",
    gender:"Male",
    specialty:"JavaScript",
    favLanguage:"React",
    catchPhrase: "I'm not doing planks",
    gradClassName:"FSW16",
    favInstructor:"Ryan",
});

const john = new ProjectManager({
    name:"John Benedict Miranda",
    age:32,
    location:"California",
    gender:"Male",
    specialty:"CSS",
    favLanguage:"Python",
    catchPhrase: "Check this out",
    gradClassName:"FSW19",
    favInstructor:"Bruce",
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
curtis.listSubjects();
console.log("");
console.log(curtis.grade);

//PM Testing
console.log(abdul.standUp("Webpt6_sprint03"));
console.log(john.debugsCode(curtis,"JavaScript"));
console.log(abdul.gradClassName);
console.log(john.favInstructor);

//Grading and Graduating
do {
    console.log(abdul.tallyGrade(curtis));
    console.log(dan.tallyGrade(curtis));
    console.log(curtis.graduate());
} while (curtis.grade<70);




