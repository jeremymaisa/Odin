const books = [
  {
    title: 'Book',
    author: 'Name',
  },
  {
    title: 'Book2',
    author: 'Name2',
  }
];

const title = books.map(book => {
  return book.title;
});

console.log(title);
