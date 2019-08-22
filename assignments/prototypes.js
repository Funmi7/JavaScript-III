/*

  In order to do these exercises you'll need your newly acquired knowledge on
  constructor functions, methods, prototypes and the `this` keyword.
  Here's an example of an exercise:

  TASK 0:

  - Build an Airplane constructor that takes a name.
  - Give airplanes the ability to take off and land.
  - If a plane takes off, its "isFlying" property is true.
  - If a plane lands, its "isFlying" property is false.

  SOLUTION CODE:

  function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  }
  Airplane.prototype.land = function () {
    this.isFlying = false;
  }

  HOW TO TEST OUR SOLUTION:

  const jumbo = new Airplane('Jumbo');
  console.log(jumbo.name)              // 'Jumbo'
  console.log(jumbo.isFlying)          // false
  jumbo.takeOff();
  console.log(jumbo.isFlying)          // true
  jumbo.land();
  console.log(jumbo.isFlying)          // false
*/

/*

  TASK 1

  - Build a Person Constructor that takes name and age.
  - Give persons the ability to greet by returning a string stating name and age.
  - Give persons the ability to eat edibles.
  - When eating an edible, it should be pushed into a "stomach" property which is an array.
  - Give persons the ability to poop.
  - When pooping, the stomach should empty.
  */

  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }

  Person.prototype.greet = function () {
    return `Hello my name is ${this.name} and I'm ${this.age} years old`;
  }

  Person.prototype.eatEdibles = function (edibles) {
    this.stomach.push(edibles);
    return `I am eating ${this.stomach}`;
  }

  Person.prototype.poop = function () {
    this.stomach.length = 0;
    return `I pooped ${this.stomach}`;
  }
  
  const funmi = new Person ('Funmi', 23);

  console.log(funmi.greet());
  console.log(funmi.eatEdibles('rice'));
  console.log(funmi.stomach);
  console.log(funmi.poop());
  console.log(funmi.stomach);


 /* TASK 2

  - Build a Car constructor that takes model name and make.
  - Give cars the ability to drive a distance.
  - By driving a car, the distance driven should be added to an "odometer" property.
  - Give cars the ability to crash.
  - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
  - Give cars the ability to be repaired.
  - A repaired car can be driven again.

  */

  function Car(modelName, modelMake) {
    this.modelName = modelName;
    this.modelMake = modelMake;
    this.odometer = 0;
    this.hasCrashed = true;
  }

  Car.prototype.drive = function (isDriving, distance) {
    if (isDriving === true) {
      this.odometer += distance;
      return `The ${this.modelName} ${this.modelMake} has been driving for ${this.odometer} miles`;
    } else {
    return this.crash();
    }
  }

  Car.prototype.crash = function () {
    this.hasCrashed = true;
    return `I crashed at ${this.odometer} miles!`
  }

  Car.prototype.repair = function (distance) {
    this.hasCrashed = false;
    return `I am repaired so I can continue driving from ${this.odometer} miles`;
  }
  const cars = new Car ('Toyota', 'Camry');

  console.log(cars.drive(true, 10));
  console.log(cars.drive(false, 10));
  console.log(cars.crash());
  console.log(cars.repair());
  /*

  TASK 3

  - Build a Baby constructor that subclasses the Person built earlier.
  - Babies of course inherit the ability to greet, which can be strange.
  - Babies should have the ability to play, which persons don't.
  - By playing, a string is returned with some text of your choosing.

  */


function Baby(name, age) {
  Person.call(this, name, age);
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function () {
  return `My name is ${this.name}, I am ${this.age} years old and I love to play`;
}

const littleOne = new Baby('Dami', 1);

console.log(littleOne.greet());
console.log(littleOne.play());


  /*
  TASK 4

  Use your imagination and come up with constructors that allow to build objects
  With amazing and original capabilities. Build 3 small ones, or a very
  complicated one with lots of state. Surprise us!

*/
//First Constructor
function Food(attributes) {
  this.class = attributes.class;
  this.name = attributes.name;
  this.source = attributes.source;
  this.calories = attributes.calories
}

Food.prototype.eat = function (destination) {
  return `When you eat ${this.name} it goes to the ${destination} and ${this.name} can be got from ${this.source}`;
}

Food.prototype.amountOfCalories = function () {
  return `The calories of ${this.name} eaten are ${this.calories * 500}`;
}

const rice = new Food({
  class: 'carbohydrate',
  name: 'Rice',
  source: 'Plants',
  calories: 50
})

console.log(rice.eat('stomach'));
console.log(rice.amountOfCalories());

// Second constructor
function Dancer(attributes) {
  this.name = attributes.name;
  this.rank = attributes.isProfessional;
  this.experience = attributes.experience;
}

Dancer.prototype.teachDance = function () {
  if (this.rank) {
    return `${this.name} Should teach dance`;
  }
  return `${this.name}Should not teach dance`;
};

const florence = new Dancer({
  name: 'Florence',
  isProfessional: true,
  experience: 8
}) 

Dancer.prototype.leadDance = function () {
  if (this.experience > 9) {
    return `${this.name} should lead the dance`;
  }
  return `${this.name} should not lead dance`;
}

const amanda = new Dancer({
  name: 'Amanda',
  isProfessional: true,
  experience: 7
}) 

console.log(florence.teachDance());
console.log(amanda.leadDance());

// Third Constructor
function Quiz(data) {
  this.firstContestant = data.firstContestant;
  this.secondContestant = data.secondContestant;
  this.thirdContestant = data.secondContestant;
  this.firstContestantScore = 0;
  this.secondContestantScore = 0;
  this.thirdContestantScore = 0;
}

Quiz.prototype.start = function (winner) {
  if (winner === 'firstContestant') {
    this.firstContestantScore +=10;
    return `The winner is ${this.firstContestant} with a score of ${this.firstContestantScore}`;
  } else if (winner === 'secondContestant') {
    this.secondContestantScore +=10;
    return `The winner is ${this.secondContestant} with a score of ${this.secondContestantScore}`;
  } else {
    this.thirdContestantScore +=10;
    return `The winner is ${this.thirdContestant} with a score of ${this.thirdContestantScore}`;
  }
}

const theQuiz = new Quiz({
  firstContestant: 'Funmi',
  secondContestant: 'Dami',
  thirdContestant: 'Rita' 
});

console.log(theQuiz.start('firstContestant'));
console.log(theQuiz.start(`secondContestant`));
console.log(theQuiz.start(`thirdContestant`));

/*

  STRETCH TASK

  Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

/*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
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
    healthPoints: 15,
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
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
*/
