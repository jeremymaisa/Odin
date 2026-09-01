const myLibrary = [];

function Book(title, author, date) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.date = date;
  this.read = false;
}

function addBookToLibrary(title, author, date) {
  let myObj = {};
  myObj = new Book(title, author, date)
  myLibrary.unshift(myObj);
}

addBookToLibrary("To kill a mocking bird", "Harper Lee", "1960-09-10");
addBookToLibrary("Pride and Prejudice", "Jane Austen", "1813-12-15");

function displayBook() {
  const container = document.querySelector('.container');
  container.innerHTML = "";

  for (const book of myLibrary) {
    const card = document.createElement('div');
    card.classList.add('book-card');
    card.dataset.id = book.id;
    card.innerHTML = `
    <p><strong>Title:</strong> ${book.title}</p>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Date:</strong> ${book.date}</p>
    <div class="btn">
      <button class="toggle-read-btn">${book.read ? "Read" : "Not Read"}</button>
      <button class="remove-btn"><i class="fa fa-trash"></i></button>
    </div>
    `
    container.appendChild(card);
  }
}

displayBook();

const formContainer = document.querySelector('.form-container');
const form = document.querySelector('.form');
const addBtn = document.querySelector('.add-btn');
const cancelBtn = document.querySelector('.cancel-btn');

formContainer.classList.remove('active');

addBtn.addEventListener('click', () => {
  formContainer.classList.add('active');
});

cancelBtn.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();
  formContainer.classList.remove('active')
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const date = document.getElementById('date').value.trim();

  addBookToLibrary(title, author, date);
  displayBook();
  form.reset();
  formContainer.classList.remove('active');
});

const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  const card = e.target.closest('.book-card');

  if (!card) return;

  const id = card.dataset.id;
  const book = myLibrary.find((b) => b.id === id);

  if (!book) return;

  if (e.target.classList.contains('toggle-read-btn')) {
    book.read = !book.read;
    displayBook();
  }

  if (e.target.closest('.remove-btn')) {
    const index = myLibrary.findIndex((b) => b.id === id);
    myLibrary.splice(index, 1);
    displayBook()
  }
});