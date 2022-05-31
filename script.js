let books = [];

function addBook(enteredTitle, enteredAuthor) {
  books.push({ title: enteredTitle, author: enteredAuthor });
}

function show(index) {
  const bookName = books[index].title;
  const authorName = books[index].author;

  const book = document.createElement('div');
  book.innerHTML = '';
  book.innerHTML = `
      ${bookName}
      <br>
      ${authorName}
      <br>
      <button type='button' class="remove" data-id=${index} onclick="removeBook(this)">Remove</button>
      <hr>`;
  main.appendChild(book);
}

for (let i = 0; i < books.length; i += 1) {
  show(i);
}

function removeBook(index){
  books = books.filter((element) => element !== books[index]);
}

const add = document.querySelector('#add');

add.addEventListener('click', (e) => {
  e.preventDefault();

  const t = document.querySelector('#title').value;
  const a = document.querySelector('#author').value;
  addBook(t, a);

  // update local storage
  localStorage.setItem('aboutBook', JSON.stringify(books));

  show(books.length - 1);
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






