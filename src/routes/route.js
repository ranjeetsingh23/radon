const express = require('express');
const router = express.Router();
const BookModel = require("../models/bookModel.js")
const UserController = require("../controllers/bookController")


router.post("/addBooks", UserController.addBooks)

router.get("/getBooksData", UserController.getBooksData)

module.exports = router;