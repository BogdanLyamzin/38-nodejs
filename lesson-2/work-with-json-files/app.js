const booksOperations = require("./books");

/*
1. Получить все книги.
2. Получить одну книгу по id.
3. Добавить книгу.
4. Обновить книгу по id.
5. Удалить книгу по id.
*/

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

// invokeAction({action: "getAll"});
// invokeAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V48"});
// invokeAction({action: "add", title: "Girl Genius", author: "Foglio"});
// invokeAction({
//     action: "updateById",
//     id: "OE-P8MXZmFJ4sgokXFWlN",
//     title: "Girl Genius", 
//     author: "Phill Foglio"
// });
invokeAction({action: "removeById", id: "OE-P8MXZmFJ4sgokXFWlN"});

// (async() => {
//     try {
//         const data = await fs.readFile("books.json");
//         console.log(JSON.parse(data));
//     } catch (error) {
//         console.log(error.message)
//     }
// })()