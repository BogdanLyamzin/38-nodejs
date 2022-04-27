const express = require("express");
const Joi = require("joi");

const {createError} = require("../../helpers");

const books = require("../../models/books");

const router = express.Router();

const bookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required()
})

router.get("/", async (req, res, next)=> {
    try {
        const result = await books.getAll();
        res.json(result);
    } catch (error) {
        next(error);
        // res.status(500).json({
        //     message: "Server error"
        // })
    }
});

router.get("/:id", async(req, res, next)=> {
    try {
        const {id} = req.params;
        const result = await books.getById(id);
        if(!result){
            throw createError(404);
            // throw createError(404, `Book with id=${id} not found`);
            // const error = new Error("Not found");
            // error.status = 404;
            // throw error;
            // res.status(404).json({
            //     message: "Not found"
            // });
            // return;
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
})

router.post("/", async(req, res, next)=> {
    try {
        const {error} = bookSchema.validate(req.body);
        if(error){
            throw createError(400, error.message);
        }
        const {title, author} = req.body;

        const result = await books.add(title, author);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async(req, res, next) => {
    try {
        const {error} = bookSchema.validate(req.body);
        if(error){
            throw createError(400, error.message);
        }
        const {id} = req.params;
        const {title, author} = req.body;
        const result = await books.updateById(id, title, author);
        if(!result){
            throw createError(404);
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async(req, res, next) => {
    try {
        const {id} = req.params;
        const result = await books.removeById(id);
        if(!result){
            throw createError(404);
        }
        // res.status(204).json({
        //     message: "book deleted"
        // });
        res.json({
            message: "book deleted"
        });
        // res.json(result)
    } catch (error) {
        next(error);
    }
})

module.exports = router;