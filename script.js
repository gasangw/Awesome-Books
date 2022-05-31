let books = [];

function addBook(title, author){
  books.push({title, author});
}

function removeBook(index){
  books = books.filter((element) => element !== books[index]);
}

const add = document.querySelector('#add');

add.addEventListener('click', (e) => {
  e.preventDefault();
  t = document.querySelector('#title').value;
  a = document. querySelector('#author').value;
  addBook(t, a);
});

//local storage
const title = document.querySelector('#title');
const author = document. querySelector('#author');
const saver = JSON.stringify(books);
localStorage.setItem('object', saver);

// add DOM elements
const form = document.querySelector('#form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');






