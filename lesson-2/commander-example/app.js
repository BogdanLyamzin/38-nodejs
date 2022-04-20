const {program} = require("commander");

const booksOperations = require("./books");

const invokeAction = async({action, id, title, author}) => {
    switch(action) {
        case "getAll":
            const books = await booksOperations.getAll();
            console.log(books);
            return books;
        case "getById":
            const book = await booksOperations.getById(id);
            console.log(book);
            return book;
        case "add":
            const newBook = await booksOperations.add(title, author);
            console.log(newBook);
           return book;
        case "updateById":
            const updateBook = await booksOperations.updateById(id, title, author);
            console.log(updateBook);
            return updateBook;
        case "removeById":
            const removeBook = await booksOperations.removeById(id);
            console.log(removeBook);
            return removeBook;
        default:
            console.log("Unknown action");
    }
};

program
    .option("-a, --action <type>")
    .option("--id <type>")
    .option("-t, --title <type>")
    .option("-at, --author <type>")

program.parse(process.argv);

const opts = program.opts();
invokeAction(opts)
    .then(data => console.log(data))