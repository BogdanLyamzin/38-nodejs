const mongoose = require("mongoose");
require("dotenv").config();

const {DB_HOST} = process.env;

mongoose.connect(DB_HOST)
    .then(()=> console.log("Database success connect"))
    .catch(error => console.log(error.message))