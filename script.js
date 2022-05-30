let books = [];
console.log('INITINALIZED', books);

function addBook(title, author){
  console.log("function called")
  books.push({title, author});
  console.log("book added", books);
}

const add = document.querySelector('#add');

add.addEventListener('onclick', () => {
  title = document.querySelector('#title');
  author = document. querySelector('#author');
  addBook(title, author);
});

/// local storage
// const title = document.querySelector('#title');
// const author = document. querySelector('#author');
// const saver = JSON.stringify({ title, author});
