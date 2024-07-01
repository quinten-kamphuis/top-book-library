const tableContainer = document.querySelector('.table-container');

const confirmBtn = addBookDialog.querySelector("#confirm-button");
const cancelBtn = addBookDialog.querySelector("#cancel-button");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
} 

const myLibrary = [
    new Book("The Hobbit", "J.R.R. Tolkien", 295, false),
    new Book("To Kill a Mockingbird", "Harper Lee", 324, true),
    new Book("1984", "George Orwell", 328, false),
    new Book("Pride and Prejudice", "Jane Austen", 279, true),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false),
    new Book("Moby-Dick", "Herman Melville", 635, false)
];

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'has been read' : 'not read yet'}`
};

Book.prototype.displayInTable = function() {
    return `<tr>
        <td>${this.title}</td>
        <td>${this.author}</td>
        <td>${this.pages}</td>
        <td class='read'>${this.read ? 'Yes' : 'No'}</td>
    </tr>`;
};

const addReadEvents = () => {
    document.querySelectorAll(".read")
    .forEach(btn => btn.addEventListener("click", (event) => {
        const id = btn.parentElement.id;
        myLibrary[id].read ? myLibrary[id].read = false : myLibrary[id].read = true;
        displayAllBooks();
}));
};

const addDeleteEvents = () => {
    document.querySelectorAll(".delete-book")
        .forEach(btn => btn.addEventListener("click", (event) => {
            const id = btn.parentElement.parentElement.id;
            myLibrary.splice(id, 1);
            displayAllBooks();
    }));
};

const displayAllBooks = () => {
    tableContainer.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const row = document.createElement('tr');
        row.id = index;
        row.innerHTML = book.displayInTable();
        row.innerHTML += `<td><img class="delete-book" src="img/trash-alt-svgrepo-com.svg" height="30" alt="Trash Can"></td>`;
        tableContainer.appendChild(row);
    });
    addReadEvents();
    addDeleteEvents();
};

const addBookToLibrary = (title, author, pages, read) => {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayAllBooks();
};

addBookDialog.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.checked);
    addBookDialog.close();
    clearForm();
});

cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addBookDialog.close();
    clearForm();
});

const clearForm = () => {
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
    notRead.checked = false;
}

displayAllBooks();

