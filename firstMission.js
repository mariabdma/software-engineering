class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getBooks() {
        return this.books;
    }

    removeBookById(id) {
        this.books = this.books.filter(book => book.id !== id);
    }

    getBookById(id) {
        return this.books.find(book => book.id === id);
    }

    updateBookById(id, info) {
        let book = this.getBookById(id);
        if (book) {
            if (info.title) {
                book.title = info.title;
            }
            if (info.description) {
                book.description = info.description;
            }
            if (info.author) {
                book.author = info.author;
            }
        }
        return book;
    }
}

class Book {
    constructor(id, title, description, author) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
    }
}
