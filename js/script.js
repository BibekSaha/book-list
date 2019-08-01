let ls = [];

class Books {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}



class UpdateUI {
    addBook(book) {
        const html = `
        <div class="books">
            <p>${book.title}</p>
            <p>${book.author}</p>
            <p>${book.isbn}</p>
            <i class="fas fa-times"></i>
        </div>
        <div class="hr hr-table"></div>
        `
        bookAdd.innerHTML += html;
    }

    showAlertDiv(color, message) {
        confirm.style.display = "block";

        confirm.className = `check ${color}`;
        confirm.textContent = message;

        setTimeout(() => {
            confirm.style.display = "none";
        }, 3000);
    }

    parentRemoveElement(element) {
        element.parentElement.nextElementSibling.remove();
        element.parentElement.remove();
    }
}



class Store {
    static addBooksToLS(book) {
        const books = ls;
        books.push(book);

        localStorage.setItem("books", JSON.stringify(books));
    }

    static displayBooks() {
        const books = JSON.parse(localStorage.getItem("books"));

        books.forEach(book => {
            const ui = new UpdateUI();
            ui.addBook(book);
        });
    }

    static removeBooks(element) {
        const isbn = element.previousElementSibling.textContent;
        let books = JSON.parse(localStorage.getItem("books"));

        books = books.filter(book => {
            if (book.isbn != isbn) {
                return book;
            }
        });

        localStorage.setItem("books", JSON.stringify(books));
    }
}