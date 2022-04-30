const express = require("express");

const ctrl = require("../../controllers/books");

const {ctrlWrapper} = require("../../helpers");

const {validation, validateId} = require("../../middlewares");

const {schemas} = require("../../models/book");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", validateId, ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.add));

router.put("/:id", validateId, validation(schemas.add), ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite", validateId, validation(schemas.updateFavorite), ctrlWrapper(ctrl.updateFavorite));

router.delete("/:id", validateId, ctrlWrapper(ctrl.removeById));

module.exports = router;