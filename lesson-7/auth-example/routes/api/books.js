const express = require("express");
const {isValidObjectId} = require("mongoose");

const {createError} = require("../../helpers");

const {Book, schemas} = require("../../models/book");

const router = express.Router();

router.get("/", async (req, res, next)=> {
    try {
        const result = await Book.find({}, "-createdAt -updatedAt");
        res.json(result);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async(req, res, next)=> {
    try {
        const {id} = req.params;
        const isValid = isValidObjectId(id);
        if(!isValid){
            throw createError(404);
        }
        const result = await Book.findById(id, "-createdAt -updatedAt");
        if(!result){
            throw createError(404);
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
})

router.post("/", async(req, res, next)=> {
    try {
        const {error} = schemas.add.validate(req.body);
        if(error){
            throw createError(400, error.message);
        }

        const result = await Book.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async(req, res, next) => {
    try {
        const {error} = schemas.add.validate(req.body);
        if(error){
            throw createError(400, error.message);
        }
        const {id} = req.params;
        const isValid = isValidObjectId(id);
        if(!isValid){
            throw createError(404);
        }
        const result = await Book.findByIdAndUpdate(id, req.body, {new: true});
        if(!result){
            throw createError(404);
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
});

router.patch("/:id/favorite", async(req, res, next) => {
    try {
        const {error} = schemas.updateFavorite.validate(req.body);
        if(error){
            throw createError(400, error.message);
        }
        const {id} = req.params;
        const isValid = isValidObjectId(id);
        if(!isValid){
            throw createError(404);
        }
        const result = await Book.findByIdAndUpdate(id, req.body, {new: true});
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
        const isValid = isValidObjectId(id);
        if(!isValid){
            throw createError(404);
        }
        const result = await Book.findByIdAndRemove(id);
        if(!result){
            throw createError(404);
        }
        res.json({
            message: "book deleted"
        });
    } catch (error) {
        next(error);
    }
})

module.exports = router;