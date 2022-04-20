const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");

const booksOperations = require("./books");

const invokeAction = async({action, id, title, author}) => {
    switch(action) {
        case "getAll":
            const books = await booksOperations.getAll();
            console.log(books);
            break;
        case "getById":
            const book = await booksOperations.getById(id);
            console.log(book);
            break;
        case "add":
            const newBook = await booksOperations.add(title, author);
            console.log(newBook);
            break;
        case "updateById":
            const updateBook = await booksOperations.updateById(id, title, author);
            console.log(updateBook);
            break;
        case "removeById":
            const removeBook = await booksOperations.removeById(id);
            console.log(removeBook);
            break;
        default:
            console.log("Unknown action");
    }
};

const arr = hideBin(process.argv);
const {argv} = yargs(arr);
invokeAction(argv);