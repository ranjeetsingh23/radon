const express = require('express');
const router = express.Router();
const bookController= require("../controllers/bookController")




router.post("/createBook", bookController.createBook)

router.post("/createAuthor", bookController.createAuthor)

router.get("/getBook", bookController.getBook)

router.get("/findAndUpdate", bookController.findAndUpdate)

router.get("/booksCost", bookController.booksCost)

router.get("/books-by-authorid/:author_id",bookController.getBooksName)

router.get("/listAuthor", bookController.listAuthor)




module.exports = router;

