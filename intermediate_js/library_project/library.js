const myLibrary = [];

function Book(title, author, date) {
  this.id = crypto.randomUUID;
  this.title = title;
  this.author = author;
  this.date = date;
  this.read = false;
}

function addBookToLibrary(title, author, date) {
  let myBook = {};
  myBook = new Book(title, author, date);
  myLibrary.unshift(myBook);
}

addBookToLibrary("Example1", "Example1", "9-1-2023");
addBookToLibrary("Example2", "Example2", "10-2-2024");
addBookToLibrary("Example3", "Example3", "11-3-2025");

function displayBook() {
  const container = document.querySelector('.container');
  container.innerHTML = "";

  for (const book of myLibrary) {
    const card = document.createElement('div');
    card.classList.add('book-card');
    card.dataset.id = this.id;

    card.innerHTML = `
      <p>Title: ${book.title}</p>
      <p>Author: ${book.date}</p>
      <p>Date: ${book.date}</p>
      <button class="button-toggle-read">${this.read ? 'read' : 'not read'}</button>
      <button class="button-remove"><i class="fa fa-trash"></i></button>
    `
    container.appendChild(card);
  }
}

displayBook()
