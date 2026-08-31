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

addBookToLibrary("Title1", "Author1", "9-1-2023");
addBookToLibrary("Title2", "Author2", "10-2-2024");
addBookToLibrary("Title3", "Author3", "11-3-2025");

function displayBook() {
  const container = document.querySelector('.container');
  container.innerHTML = "";

  for (const book of myLibrary) {
    const card = document.createElement('div');
    card.classList.add('book-card');
    card.dataset.id = this.id;

    card.innerHTML = `
      <p><strong>Title:</strong> ${book.title}</p>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Date:</strong> ${book.date}</p>
      <div class="btn">
       <button class="button-toggle-read">${this.read ? 'read' : 'not read'}</button>
      <button class="button-remove"><i class="fa fa-trash"></i></button></div>
     
    `
    container.appendChild(card);
  }
}

displayBook()
