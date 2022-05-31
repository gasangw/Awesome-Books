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
        
       const storedBooks = [book1, book2];
    // {
    //     title: 'book one',
    //     author: 'John kevin'
    // },
    // {
    //     title: 'book two',
    //     author: 'Thomas  kevin'
    // }
    // ];
     const books = storedBooks;

     books.forEach((book)=> See.addBookToList(book));
    }

    static removeBook(item){
        console.log("in function");
        // console.log(book.classList.contains('.delete'));
        // if(book.books.contains('delete')) {
        //     console.log("inside if statement");

        //     book.parentElement.parentElement.remove();
        //   }
        console.log(item);
        console.log(item.getAttribute('data-id'));
        console.log("before filter");
        this.books = this.books.filter((element) => element !== this.books[item.getAttribute('data-id')]);
    }

    static addBookToList(book) {
        // console.log("book = ", book);
        const list = document.querySelector('.books');
        const row = document.createElement('tr');
        console.log("book = ", book);
          row.innerHTML = `
           <td>${book.title}</td>
           <td>${book.author}</td>
           <button type="button" class="remove" data-id=${book} onclick="See.removeBook(this)">Remove</button>`;
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

// document.querySelector('.books').addEventListener('click', (e) => {
//     // Remove book from UI
//     See.removeBook(book);
//   });