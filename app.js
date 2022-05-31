class Book {
    constructor(title, author){
        this.title;
        this.author;
    }
}

class See {
    static displayBooks() {
       const storedBooks = [
    {
        title: 'book one',
        author: 'John kevin'
    },
    {
        title: 'book two',
        author: 'Thomas  kevin'
    }
    ];
     const books = storedBooks;

     books.forEach((book)=> See.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('.books');
        const row = document.createElement('tr');
          row.innerHTML = `
           <td>${book.title}</td>
           <td>${book.author}</td>
           <td><button> <a href="#">Remove</a></button></td>
          `;
          list.appendChild(row);
     }
}

document.addEventListener('DOMContentLoaded', See.displayBooks);

//adding a book
document.querySelector('#form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value

//instatiate new book
const book = new Book(title, author);

//add book to see

See.addBookToList(book); 
});