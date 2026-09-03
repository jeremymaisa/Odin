// const myObject = {
//   property: "Value",
//   otherProperty: 77,
//   "obnoxious property": function() {
//     // do stuff!!
//     return "Hello World!"
//   },
// };

// console.log(myObject["obnoxious property"]);

  // function Person(name) {
  //   this.name = name;
  // }

  // Person.prototype.sayName = function() {
  //     console.log(`Hello I'm ${this.name}`);
  //   };

  // function Player(name, marker) {
  //   this.name = name;
  //   this.marker = marker;
  // }

  // Player.prototype.getMarker = function() {
  //   console.log(`Get marker is "${this.marker}"`)
  // };

  // Object.setPrototypeOf(Player.prototype, Person.prototype);
  // Object.getPrototypeOf(Player.prototype);

  // const player1 = new Player("Steve", "X");
  // const player2 = new Player("also Steve", "X");
 
  // player1.sayName()

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = function() {
//     console.log(`The Hobbit by ${this.title} ${this.author}, ${this.pages}, ${this.read}`);
//   };
// };

// const book1 = new Book("J.R.R", "Tolkien", 295, "not read yet!");
// console.log(book1.info());

// function createUser(name) {
//   const discordName = "@" + name;

//   let reputation = 0;

//   const getReputation = () => reputation;
//   const giveReputation = () => reputation++;

//   return {name, discordName, getReputation, giveReputation};
// }

// const josh = createUser('josh');
// josh.giveReputation();
// josh.giveReputation();

// console.log({
//   discordName: josh.discordName,
//   reputation: josh.giveReputation()
// });

// function createPlayer(name, level) {
//   const user = createUser(name);

//   const getLevel = () => level;
//   const increaseLevel = () => {level++};
//   return Object.assign({}, user, {getLevel, increaseLevel});
  
// }

// const jeremy = createPlayer("Jeremy", 15)
// console.log({name: jeremy.name, level: jeremy.getLevel(), discordName: jeremy.discordName});


const calculator = (() => {
  let lastResult;
  
  const add = (a, b) => {
     lastResult = a + b;
    return lastResult
  }

  const subtract = (a, b) => {
     lastResult = a - b;
    return lastResult
  }

  const multiply = (a, b) => {
     lastResult = a * b;
    return lastResult
  }

  const divide = (a, b) => {
     lastResult = a / b;
    return lastResult
  }

  const getLastResult = () => lastResult;

  return {add, subtract, multiply, divide, getLastResult};
})();

console.log(calculator.add(3, 5));
console.log(calculator.subtract(6, 2));
console.log(calculator.getLastResult());
console.log(calculator.multiply(14, 5534));