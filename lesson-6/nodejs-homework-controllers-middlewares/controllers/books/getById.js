const { Book } = require("../../models/book");

const { createError } = require("../../helpers");

const getById = async (req, res) => {
    const {id} = req.params;
    const result = await Book.findById(id, "-createdAt -updatedAt");
    if (!result) {
        throw createError(404);
    }
    res.json(result);
};

module.exports = getById;