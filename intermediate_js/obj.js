// const myObject = {
//   property: "Value",
//   otherProperty: 77,
//   "obnoxious property": function() {
//     // do stuff!!
//     return "Hello World!"
//   },
// };

// console.log(myObject["obnoxious property"]);

  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayName = function() {
      console.log(`Hello I'm ${this.name}`);
    };

  function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }

  Player.prototype.getMarker = function() {
    console.log(`Get marker is "${this.marker}"`)
  };

  Object.setPrototypeOf(Player.prototype, Person.prototype);
  Object.getPrototypeOf(Player.prototype);

  const player1 = new Player("Steve", "X");
  const player2 = new Player("also Steve", "X");
 
  player1.sayName()

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

