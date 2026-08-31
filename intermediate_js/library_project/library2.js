const myLibrary = [];

function Book(title, author, date) {
  this.id = crypto.randomUUID();
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
    card.dataset.id = book.id;

    card.innerHTML = `
      <p><strong>Title:</strong> ${book.title}</p>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Date:</strong> ${book.date}</p>
      <div class="btn">
       <button class="toggle-read-btn">${book.read ? 'Read' : 'Not Read'}</button>
      <button class="remove-btn"><i class="fa fa-trash"></i></button></div>
     
    `
    container.appendChild(card);
  }
}

displayBook();

const formContainer = document.querySelector('.form-container');
const form = document.querySelector('.form');
const addBtn = document.querySelector('.add-btn');
const cancelBtn = document.querySelector('.cancel-btn')


formContainer.classList.remove('active');



addBtn.addEventListener('click', () => {
  formContainer.classList.toggle('active');
});

cancelBtn.addEventListener('click', () => {
  form.reset();
  formContainer.classList.remove('active')

});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const date = document.getElementById('date').value.trim();

  if (!title || !author || !date) return;

  addBookToLibrary(title, author, date);
  displayBook();

  form.reset();
  formContainer.classList.remove('active');
});

const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  const card = e.target.closest(".book-card");

  if (!card) return;

  const id = card.dataset.id;
  const book = myLibrary.find((b) => b.id === id)

  if (!book) return;

  if (e.target.classList.contains('toggle-read-btn')) {
    book.read = !book.read;
    displayBook();
  }

  if (e.target.closest('.remove-btn')) {
    const index = myLibrary.findIndex((b) => b.id === id);
    myLibrary.splice(index, 1);
    displayBook();
  }

});