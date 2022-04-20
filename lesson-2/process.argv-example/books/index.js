const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

const booksPath = path.join(__dirname, "books.json");

const updateBooks = async (books) => {
    const data = JSON.stringify(books, null, 2);
    await fs.writeFile(booksPath, data);
}

const getAll = async ()=> {
    try {
        const data = await fs.readFile(booksPath);
        return JSON.parse(data);
    } catch (error) {
        throw error;
    }
};

const getById = async (id)=> {
    const books = await getAll();
    const result = books.find(item => item.id === id);
    if(!result){
        return null;
    }
    return result;
};

const add = async(title, author) => {
    const books = await getAll();
    const newBook = {
        id: nanoid(),
        title,
        author,
    };
    books.push(newBook);
    await updateBooks(books);
    return newBook;
};

const updateById = async(id, title, author) => {
    const books = await getAll();
    const result = books.find(item => item.id === id);
    if(!result){
        return null;
    }
    result.title = title;
    result.author = author;
    await updateBooks(books);
    return result;
};

const removeById = async (id) => {
    const books = await getAll();
    const idx = books.findIndex(item => item.id === id);
    if(idx === -1){
        return null;
    }
    const [removeBook] = books.splice(idx, 1);
    await updateBooks(books);
    return removeBook;
};

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    removeById
}