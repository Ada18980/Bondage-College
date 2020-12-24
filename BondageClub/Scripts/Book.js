const Books = [];

let BookNames;
let BookAuthors;
let BookTags;

class Book {
    constructor(bookDefinition) {
        this.name = bookDefinition.name;
        this.title = "";
        this.description = "";
        this.authorKey = bookDefinition.author;
        this.author = "";
    }
}

function BookLoadAll() {
    BookDefinitions.forEach((bookDef) => Books.push(new Book(bookDef)));

    // Initialise the text caches for book names, authors and tags
    BookNames = new TextCache("Assets/Books/Books.csv");
    BookAuthors = new TextCache("Assets/Books/Authors.csv");
    BookTags = new TextCache("Assets/Books/Tags.csv");

    // Register cache rebuild listeners so that books are translated on language changes
    BookNames.onRebuild(BookLoadNames);
    BookAuthors.onRebuild(BookLoadAuthors);
}

function BookLoadNames(bookNames) {
    Books.forEach((book) => {
        book.title = bookNames.get(`${book.name}`);
        book.description = bookNames.get(`${book.name}_Description`);
    });
}

function BookLoadAuthors(bookAuthors) {
    Books.forEach((book) => {
        book.author = bookAuthors.get(book.authorKey);
    });
}
