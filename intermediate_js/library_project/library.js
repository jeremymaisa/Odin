const myLibrary = [];

function Book(title, author, date) {
  this.id = crypto.randomUUID;
  this.title = title;
  this.author = author;
  this.date = date;
  this.read = false;
}

function addBookToLibrary(title, author, date) {
  const myBook = {};
  this.myBook = new Book(title, author, date);
  myLibrary.unshift(myBook);
}

addBookToLibrary("Example", "Example", "9-1-2023");
addBookToLibrary("Example2", "Example2", "10-2-2024");
addBookToLibrary("Example3", "Example3", "11-3-2025");


