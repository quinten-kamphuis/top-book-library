const myLibrary = [
    {
        title: 'The Hobbit', 
        author: 'J.R.R. Tolkien', 
        pages: 295, 
        read: false
    },{
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        pages: 324,
        read: true
    },{
        title: "1984",
        author: "George Orwell",
        pages: 328,
        read: false
    },{
        title: "Pride and Prejudice",
        author: "Jane Austen",
        pages: 279,
        read: true
    },{
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
        read: false
    },{
        title: "Moby-Dick",
        author: "Herman Melville",
        pages: 635,
        read: false
    }    
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
} 

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'has been read' : 'not read yet'}`
};

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

const addBookToLibrary = () => {

};