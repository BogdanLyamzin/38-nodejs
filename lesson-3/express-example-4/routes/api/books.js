const express = require("express");
const {nanoid} = require("nanoid");

const books = require("../../data/books");

const router = express.Router();

router.get("/", (req, res)=> {
    res.json(books);
});

router.post("/", (req, res, next)=> {
    try {
        const {title, author} = req.body;
        if(!title || !author) {
            throw new Error("Missing title or author field")
        };
    
        const newBook = {
            ...req.body,
            id: nanoid()
        };
        books.push(newBook);
        res.status(201).json(newBook);
    } catch (error) {
        next(error);
    }
});

router.put("/:id", (req, res)=> {
    const {title, author} = req.body;
    if(!title || !author) {
        res.status(400).json({
            message: "Missing title or author field"
        });
        return;
    };
})

module.exports = router;