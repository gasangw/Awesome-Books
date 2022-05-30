let books = [];

const add = document.querySelector('#add');

add.addEventListener('click', () => {
  title = document.querySelector('#title');
  author = document. querySelector('#author');
  books.push({title, author});
});


/// local storage
const title = document.querySelector('#title');
const author = document. querySelector('#author');
const saver = JSON.stringify({ title, author});
