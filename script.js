let books = [];

function addBook(title, author){
  books.push({title, author});
}

function removeBook(index){
  books = books.filter((element) => element !== books[index]);
}

const add = document.querySelector('#add');

add.addEventListener('onclick', () => {
  title = document.querySelector('#title');
  author = document. querySelector('#author');
  addBook(title, author);
});

//local storage
const title = document.querySelector('#title');
const author = document. querySelector('#author');
const saver = JSON.stringify({ title, author});
localStorage.setItem('object', saver);




