const express = require('express');
const router = express.Router();
//const BookModel = require("../models/bookModel.js")
const BookController = require("../controllers/bookController")


router.post("/addBooks", BookController.addBooks)

router.get("/getBooksData", BookController.getBooksData)

module.exports = router;