const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Author API
router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

//Publisher API
router.post("/createPublisher", publisherController.createPublisher)

//Book API
router.post("/createBook", bookController.createBook  )

router.put("/updateIsHardCover", bookController.updateIsHardCover)

router.put("/authorRating", bookController.authorRating)

router.get("/getBooksWithAuthor_PublisherDetails", bookController. getBooksWithAuthor_PublisherDetails)

module.exports = router;