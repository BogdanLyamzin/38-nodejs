const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const { nanoid } = require("nanoid");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const tempDir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
    limits: {
        fileSize: 1024
    }
});

const upload = multer({
    storage: multerConfig
});

const books = [];
const booksDir = path.join(__dirname, "public", "books");
// upload.array("image", 8)
// upload.array("image", 8)
// upload.fields([{name: "image", maxCount: 1}, {name: "pictures", maxCount: 40}])
app.post("/api/books", upload.single("image"), async(req, res)=> {
    try {
        const {originalname, path: tempUpload} = req.file;
        const resultUpload = path.join(booksDir, originalname);
        await fs.rename(tempUpload, resultUpload);
        const image = path.join("books", originalname);
        const newBook = {
            _id: nanoid(),
            ...req.body,
            image
        };
        books.push(newBook);
        res.status(201).json(newBook);
    } catch (error) {
        await fs.unlink(req.file.path);
    }
});

app.get("/api/books", async(req, res)=> {
    res.json(books);
})

app.listen(3000);