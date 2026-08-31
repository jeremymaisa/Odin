const myLibrary = [];

function Book(title, name, author, date) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.name = name;
  this.author = author;
  this.date = date
  this.read = false;
}

function addBookToLibrary(title, name, author, date) {
  let bookObj = {}
  bookObj = new Book(title, name, author, date);
  myLibrary.unshift(bookObj);
}

addBookToLibrary("End Game", "Marvek", "Radom", 2012)
addBookToLibrary("Dr. J", "Jose", "Radom", 2015)


function displayBook() {
  const container = document.querySelector('.container');
  container.innerHTML = "";

  for (const book of myLibrary) {
    let bookCard = document.createElement("div");
    bookCard.classList.add('book-card');
    bookCard.dataset.id = book.id;
    bookCard.innerHTML = `
     <p><strong>TITLE:</strong> ${book.title}</p>
     <p><strong>NAME:</strong> ${book.name}</p>
     <p><strong>AUTHOR:</strong> ${book.author}</p>
     <p><strong>DATE:</strong> ${book.date}</p>
     <div class="btn">
      <button class="toggle-read-btn">${book.read ? "Read" : "Not Read"}</button>
      <button class="remove-btn"><i class="fa fa-trash"></i></button>
      </div>
     `;
    container.appendChild(bookCard);
  }
}

displayBook();

const addBtn = document.querySelector('.add-btn');
const formContainer = document.querySelector('.form-container');
const form = document.querySelector('.form');
const cancelBtn = document.querySelector('.cancel-btn');

formContainer.classList.remove('active');


addBtn.addEventListener('click', () => {
  formContainer.classList.toggle('active');
});

cancelBtn.addEventListener('click', () => {
  form.reset();
  formContainer.classList.remove('active');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const name = document.getElementById('name').value.trim();
  const author = document.getElementById('author').value.trim();
  const date = document.getElementById('date').value.trim();

  if (!title || !name || !author || !date) return;

  addBookToLibrary(title, name, author, date);
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
    displayBook();
  }
});