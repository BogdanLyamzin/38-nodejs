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

const idx = process.argv.findIndex(item => item === "--action");
if(idx !== -1){
    const actionName = process.argv[idx + 1];
    invokeAction({action})
}