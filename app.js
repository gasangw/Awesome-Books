class See {
  constructor(inputTitle, inputAuthor) {
    this.title = inputTitle;
    this.author = inputAuthor;
  }

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
document.addEventListener('DOMContentLoaded', showBookList);

// adding a book
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new See(title, author);

  See.display(book);
  See.add(book);
});

// removing a book
document.querySelectorAll('.books').addEventListener('click', (e) => {
  See.removeBook(e.target);
  const writer = e.target.previousElementSibling.textContent;
  See.delete(writer);
});

// Adding the correct section
function showBookList(){
    document.getElementById('id1').style.visibility = "visible";
    document.getElementById('id2').style.visibility = "hidden";
    document.getElementById('id3').style.visibility = "hidden";
}

function showForm(){
    document.getElementById('id1').style.visibility = "hidden";
    document.getElementById('id2').style.visibility = "visible";
    document.getElementById('id3').style.visibility = "hidden";
}

function showContact(){
    document.getElementById('id1').style.visibility = "hidden";
    document.getElementById('id2').style.visibility = "hidden";
    document.getElementById('id3').style.visibility = "visible";
}