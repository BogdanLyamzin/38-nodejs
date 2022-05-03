const { isValidObjectId } = require("mongoose");

const { createError } = require("../helpers");

const validateId = (req, res, next) => {
    const { id } = req.params;
    const isValid = isValidObjectId(id);
    if (!isValid) {
        next(createError(404, "Invalid id"));
        return;
    }
    next();
};

module.exports = validateId;