class Book {
    constructor(inputTitle, inputAuthor){
        this.title = inputTitle;
        this.author = inputAuthor;
    }
}


class See {
    static displayBooks() {
        const book1 = new Book('book one', 'John kevin');
        const book2 = new Book('book two', 'Thomas  kevin');
        
       let books = [book1, book2];
     books.forEach((book)=> See.addBookToList(book));
    
    }
    
    static removeBook(book){
        if(book) {
            book.parentElement.parentElement.parentElement.remove();
        }
    }

    static addBookToList(book) {
        const list = document.querySelector('.books');
        const row = document.createElement('tr');
          row.innerHTML = `
           <td>${book.title}</td> by
           <td>${book.author}</td>
           <td><button class="delete"> <a href="#">Remove</a></button></td>`;
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
const book= new Book(title, author);
//add book to see
See.addBookToList(book);

});

document.querySelector('.books').addEventListener('click', (e) => {
    // Remove book
    See.removeBook(e.target);
    
  });
  