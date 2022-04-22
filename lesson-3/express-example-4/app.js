const express = require("express");
const cors = require("cors");

const booksRouter = require("./routes/api/books");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", booksRouter);

app.use((req, res)=> {
    res.status(404).json({
        message: "Not found"
    });
});

app.use((error, req, res, next)=> {
    const {status = 500, message} = error;
    res.status(status).json({
        message
    })
})

app.listen(4000);