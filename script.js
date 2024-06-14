const tableContainer = document.querySelector('.table-container');

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
    tableContainer.innerHTML += `<tr>
        <td>${this.title}</td>
        <td>${this.author}</td>
        <td>${this.pages}</td>
        <td>${this.read ? 'Yes' : 'No'}</td>
    </tr>`;
};
    
const addBookToLibrary = () => {
    
};

myLibrary.forEach(book => {
    book.displayInTable();
});