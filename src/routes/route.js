const express = require('express');
const router = express.Router();
const BookModel= require("../models/bookModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/addBooks", UserController.addBooks  )

router.get("/getBooksData", UserController.getBooksData)

module.exports = router;