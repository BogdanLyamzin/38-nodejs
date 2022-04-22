const express = require("express");

const books = require("./books");

const app = express();

// app.set("json spaces", 16);

app.get("/books", (req, res)=> {
    // res.json(null);
    // res.send(null);
    res.json(books);
    // res.send(books);
});

app.post("/books", (req, res)=> {
    books.push(req.body);
    res.json(books);
})

app.listen(4000);