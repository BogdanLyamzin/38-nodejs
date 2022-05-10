const express = require("express");
const {isValidObjectId, Schema} = require("mongoose");

const {createError} = require("../../helpers");

const {Book, schemas} = require("../../models/book");

const {auth} = require("../../middlewares");

const router = express.Router();

router.get("/", auth, async (req, res, next)=> {
    const {_id} = req.user;
    const {page = 1, limit = 20} = req.query;
    const skip = (page - 1) * limit;
    try {
        const result = await Book.find(
            {owner: _id}, 
            "-createdAt -updatedAt",
            {skip, limit: Number(limit)})
            .populate("owner", "email");
        res.json(result);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", auth, async(req, res, next)=> {
    const {_id: owner} = req.user;
    try {
        const {id} = req.params;
        const isValid = isValidObjectId(id);
        if(!isValid){
            throw createError(404);
        }
        const result = await Book.findOne({_id: id, owner}, "-createdAt -updatedAt");
        if(!result){
            throw createError(404);
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
})

router.post("/", auth, async(req, res, next)=> {
    const {_id} = req.user;
    try {
        const {error} = schemas.add.validate(req.body);
        if(error){
            throw createError(400, error.message);
        }

        const result = await Book.create({...req.body, owner: _id});
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
});

router.put("/:id", auth, async(req, res, next) => {
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

router.patch("/:id/favorite", auth,  async(req, res, next) => {
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

router.delete("/:id", auth,  async(req, res, next) => {
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