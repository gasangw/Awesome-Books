/* eslint-disable max-classes-per-file */
class Book {
  constructor(inputTitle, inputAuthor) {
    this.title = inputTitle;
    this.author = inputAuthor;
  }
}

class See {
  static displayAll() {
    const list = See.get();
    if (list) {
      list.forEach((book) => See.display(book));
    }
  }

  static removeBook(book) {
    if (book) {
      book.parentElement.remove();
    }
  }

  static display(book) {
    const list = document.querySelector('.books');
    const row = document.createElement('tr');
    row.innerHTML = `
         <td>"${book.title}"</td>&nbspby &nbsp
         <td>${book.author}</td>
         <button class="delete">Remove</button>`;
    list.appendChild(row);
  }

  static get() {
    let list;
    const data = localStorage.getItem('memory');
    if (!data) {
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

  static delete(writer) {
    const list = See.get();

    list.forEach((book, index) => {
      if (book.author === writer) {
        list.splice(index, 1);
      }
    });
    localStorage.setItem('memory', JSON.stringify(list));
  }
}

document.addEventListener('DOMContentLoaded', See.displayAll);

// adding a book
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  See.display(book);
  See.add(book);
});

// removing a book
document.querySelector('.books').addEventListener('click', (e) => {
  See.removeBook(e.target);
  const writer = e.target.previousElementSibling.textContent;
  See.delete(writer);
});
