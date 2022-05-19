const {Schema, model} = require("mongoose");
const Joi = require("Joi");

const genres = ["drama", "comedy", "love", "fantastic"];
// const isbnRegexp = /^[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}$/;

const bookSchema = Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    genre: {
        type: String,
        required: true,
        enum: genres
    },
    // isbn: {
    //     type: String,
    //     required: true,
    //     match: isbnRegexp,
    //     unique: true
    // },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
}, {versionKey: false, timestamps: true});

const addSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    favorite: Joi.bool(),
    genre: Joi.string().valueOf(...genres).required(),
    // isbn: Joi.string().pattern(isbnRegexp).required()
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.bool().required()
});

const schemas = {
    add: addSchema,
    updateFavorite: updateFavoriteSchema
}

const Book = model("book", bookSchema);
// category => categories
// mouse => mice

module.exports = {Book, schemas};