const bookForm = document.querySelector(".book-form");
const confirm = document.querySelector(".check");
const bookAdd = document.querySelector(".table-data");

bookForm.addEventListener("submit", e => {
    e.preventDefault();

    const title = bookForm.title.value.trim();
    const author = bookForm.author.value.trim();
    const isbn = bookForm.isbn.value.trim();

    const book = new Books(title, author, isbn);
    const ui = new UpdateUI();

    if (title && author && isbn) {
        ui.addBook(book);
        Store.addBooksToLS(book);
        ui.showAlertDiv("success", "Book added!");
        bookForm.reset();
    } else {
        ui.showAlertDiv("error", "Please fill out all the forms");
    }
});

bookAdd.addEventListener("click", e => {
    const ui = new UpdateUI();

    if (e.target.tagName === "I") {
        ui.parentRemoveElement(e.target);
        ui.showAlertDiv("removed", "Book removed!");
        Store.removeBooks(e.target);
    }
});

Store.displayBooks();