const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")



router.post("/createBook", BookController.createBook  )

router.get("/bookList", BookController.bookList)

router.post("/getBooksInYear", BookController.getBooksInYear)

router.post("/getParticularBooks", BookController.getParticularBooks)

router.get("/getRandomBooks", BookController.getRandomBooks)

router.get("/getXINRBooks", BookController.getXINRBooks)

module.exports = router;