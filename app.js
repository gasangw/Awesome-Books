class Book {
    constructor(inputTitle, inputAuthor){
        this.title = inputTitle;
        this.author = inputAuthor;
    }
}

class See {
    static displayAll() {
        const list = See.get();
        if(list){
            list.forEach((book)=> See.display(book));
        }
    }
    static removeBook(book){
        if(book) {
            book.parentElement.parentElement.parentElement.remove();
        }
    }
    static display(book) {
        const list = document.querySelector('.books');
        const row = document.createElement('tr');
          row.innerHTML = `
           <td>${book.title}</td>
           <td>${book.author}</td>
           <td><button class="delete"> <a href="#">Remove</a></button></td>`;
           list.appendChild(row);
    }

      static get() {
        let list;
        let data = localStorage.getItem('memory')
        if(!data) {
          list = [];
        } else {
          list = JSON.parse(data);
        }
        return list;
      }
    
      static add(book) {
        const list = See.get();
        list.push(book);
        localStorage.setItem('memory', JSON.stringify(list));
      }
}

// display existing books
document.addEventListener('DOMContentLoaded', See.displayAll);

// adding a book
document.querySelector('#form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value

    const book= new Book(title, author);

    See.display(book);
    See.add(book);
});

// removing a book
document.querySelector('.books').addEventListener('click', (e) => {
    See.removeBook(e.target);
});
